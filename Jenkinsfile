pipeline {
    agent any
    environment {
        WEB_EXT_API_KEY = credentials('jwt-firefox-dev-issuer')
        WEB_EXT_API_SECRET = credentials('jwt-firefox-dev-secret')
    }
    stages {
        stage('Fetch Sources') {
            steps {
                git(url: 'https://github.com/kingcobra2468/gfg-debloater.git',
                    branch: params.BRANCH)
            }
        }
        stage('Build Sources') {
            steps {
                sh 'npm install'
            }
        }
        stage('Sign Extension & Get .XPI') {
            steps{
                sh 'npm run sign-ext'
            }
            post {
                // If success, save the extension as an artifact.
                success {
                    archiveArtifacts 'web-ext-artifacts/*.xpi'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
