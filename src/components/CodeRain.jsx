import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CodeRain = () => {
  const [codeLines, setCodeLines] = useState([]);
  
  const programmingLanguages = [
    // JavaScript/React
    'const React = require("react");',
    'import { useState } from "react";',
    'useEffect(() => {}, []);',
    'const [state, setState] = useState();',
    'export default Component;',
    'className="bg-blue-500";',
    
    // Node.js/Backend
    'npm install express',
    'const app = express();',
    'app.get("/api", (req, res) => {});',
    'mongoose.connect(uri);',
    'const User = mongoose.model("User");',
    'bcrypt.hash(password, 10);',
    
    // Python
    'import numpy as np',
    'def hello_world():',
    '    return "Hello World"',
    'pip install pandas',
    'df = pd.read_csv("data.csv")',
    'for item in items:',
    
    // Java
    'public class Main {',
    '    public static void main(String[] args) {',
    '        System.out.println("Hello");',
    '    }',
    '}',
    
    // C++
    '#include <iostream>',
    'using namespace std;',
    'int main() {',
    '    cout << "Hello World";',
    '    return 0;',
    '}',
    
    // SQL
    'SELECT * FROM users;',
    'INSERT INTO users VALUES ();',
    'UPDATE users SET name = "";',
    'DELETE FROM users WHERE id = 1;',
    'CREATE TABLE users ();',
    
    // Git Commands
    'git add .',
    'git commit -m "Update"',
    'git push origin main',
    'git pull origin main',
    'git branch feature',
    'git merge feature',
    
    // Docker
    'docker build -t app .',
    'docker run -p 3000:3000 app',
    'docker-compose up',
    'docker ps',
    'docker logs container',
    
    // Kubernetes
    'kubectl apply -f config.yaml',
    'kubectl get pods',
    'kubectl logs pod-name',
    'kubectl exec -it pod-name bash',
    
    // AWS
    'aws s3 ls',
    'aws ec2 describe-instances',
    'aws lambda invoke function',
    'aws dynamodb scan table',
    
    // Linux Commands
    'ls -la',
    'cd /path/to/directory',
    'sudo apt update',
    'chmod +x script.sh',
    'ps aux | grep process',
    
    // Web Technologies
    'html { font-size: 16px; }',
    '<div className="container">',
    'fetch("/api/data")',
    'localStorage.setItem("key", "value")',
    'window.addEventListener("load", () => {});',
    
    // AI/ML
    'import tensorflow as tf',
    'model.fit(X_train, y_train)',
    'predictions = model.predict(X_test)',
    'from sklearn.ensemble import RandomForest',
    
    // Blockchain
    'web3.eth.getBalance(address)',
    'contract.methods.function().call()',
    'const provider = new ethers.providers.Web3Provider(window.ethereum)',
    'const signer = provider.getSigner()',
    
    // DevOps
    'terraform init',
    'helm install app',
    'ansible-playbook playbook.yml',
    'jenkins build job',
    
    // Database
    'redis-cli ping',
    'mongo --host localhost',
    'psql -U username -d database',
    'mysql -u root -p',
    
    // Testing
    'npm test',
    'jest --watch',
    'cypress open',
    'pytest test_file.py',
    
    // Build Tools
    'webpack --mode production',
    'gulp build',
    'grunt default',
    'npm run build',
    
    // Package Managers
    'yarn add package',
    'pip install package',
    'go get package',
    'cargo add package',
    
    // Cloud Platforms
    'gcloud compute instances create',
    'az vm create',
    'heroku create',
    'vercel --prod'
  ];

  useEffect(() => {
    const generateCodeLines = () => {
      const newLines = [];
      for (let i = 0; i < 20; i++) {
        newLines.push({
          id: Math.random(),
          text: programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)],
          x: Math.random() * 100, // Random horizontal position
          speed: 0.8 + Math.random() * 1.2,
          color: Math.random() > 0.5 ? '#915eff' : '#00ffff',
          opacity: 0.4 + Math.random() * 0.6,
          fontSize: Math.random() > 0.7 ? 'text-sm' : 'text-xs'
        });
      }
      setCodeLines(newLines);
    };

    generateCodeLines();
    const interval = setInterval(generateCodeLines, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[400px] left-0 right-0 h-[calc(100vh-100px)] overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className={`absolute font-mono ${line.fontSize} whitespace-nowrap`}
          style={{
            left: `${line.x}%`,
            color: line.color,
            opacity: line.opacity
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: [0, 800],
            opacity: [line.opacity, 0]
          }}
          transition={{
            duration: line.speed * 12,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {line.text}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeRain;