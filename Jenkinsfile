pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Kishoreloganathan07/ParcelPath.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                bat 'npm test'
            }
        }

        stage('Production Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'ParcelPath CI Pipeline: SUCCESS'
        }

        failure {
            echo 'ParcelPath CI Pipeline: FAILED'
        }

        always {
            echo 'ParcelPath CI Pipeline execution completed.'
        }
    }
}