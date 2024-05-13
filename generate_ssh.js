import { writeFileSync } from "fs";
import { generateKeyPairSync } from "crypto";

function generateSSHKeyPair() {
  // Generate SSH key pair
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  return { publicKey, privateKey };
}

function saveKeysToFiles(publicKey, privateKey) {
  // Save public key to id_rsa.pub file
  writeFileSync("id_rsa.pub", publicKey);

  // Save private key to id_rsa file
  writeFileSync("id_rsa", privateKey);

  console.log("SSH keys generated and saved successfully.");
}

const { publicKey, privateKey } = generateSSHKeyPair();
saveKeysToFiles(publicKey, privateKey);
