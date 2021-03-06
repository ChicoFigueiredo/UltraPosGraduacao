var path, node_ssh, ssh, fs
    // Putting entire directories
const failed = []
const successful = []

fs = require('fs')
path = require('path')
node_ssh = require('node-ssh')
ssh = new node_ssh()


const HOST_URL = 'ssh.ultraposgraduacao.com.br';
const REMOTE_DIR = '/var/www/ultra-pos/';
const USER = 'root';
const PSW = 'h5Y*Wff*dpDbmtUx';
const FILE_KEY = '';
const LOCAL_DIR = '../admin-server/inscricao/';
const PASTA_DEPLOY = 'inscricao/';

ssh.connect({
        host: HOST_URL,
        username: USER,
        //privateKey: FILE_KEY,
        password: PSW,
        port: 22
    })
    .then(function() {
        console.log("\n\n****************************************************************************");
        const cmd1 = 'sudo sudo sudo rm -Rfv *';
        console.log("executando: " + cmd1 + "\n");
        ssh.execCommand(cmd1, { cwd: REMOTE_DIR + PASTA_DEPLOY }).then(function(result) {
            console.log(cmd1 + ' STDOUT: \n' + result.stdout);
            console.log('');
            console.log(cmd1 + ' STDERR: \n' + result.stderr);
            console.log("\n\n****************************************************************************");
            console.log("executando: scp dir \n\n");
            ssh.putDirectory(LOCAL_DIR, REMOTE_DIR + 'spa/', {
                recursive: true,
                concurrency: 10,
                validate: function(itemPath) {
                    const baseName = path.basename(itemPath)
                    return baseName.substr(0, 1) !== '.' && // do not allow dot files
                        baseName !== 'node_modules' // do not allow node_modules
                },
                tick: function(localPath, remotePath, error) {
                    if (error) {
                        failed.push(localPath)
                        console.log(localPath + ' failed');
                    } else {
                        successful.push(localPath)
                        console.log(localPath + ' up');
                    }
                }
            }).then(function(status) {
                console.log("\n\n-------------------------------------------------------------------------------");
                console.log('*  the directory transfer was ', status ? 'successful' : 'unsuccessful');
                console.log('*  failed transfers: ', failed.join(', '));
                console.log('*  successful transfers: ', successful.join(', '));
                ssh.dispose();
            });
        })
    }).then(function() {});