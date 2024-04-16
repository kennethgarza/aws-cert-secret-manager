# AWS Cert Secrets Manager App

## Overview
Convert Certificates that need to be stored in AWS KMS into base64 encoded json objects that can be easily copy and pasted into the AWS KMS. 

## Warning
This is not intended to solve any encryption issues.  AWS KMS is an AWS Managed HSM that provides all the security you need.  This application is only meant to put the values in an easy to use format for downstream applications.  

Also... Base64 encoding is not encryption! I only use it to preserve line breaks and stuff in the cert files to make my life easier.

## How to use
1. Rename the `dotenv.example.txt` file to `.env`
2. Open up the Certificate and Key files for both the Site Certificate, Site Key, and Chain Certificate and copy the values in the variables.
```text
CERT="-----BEGIN CERTIFICATE-----
MIIGxTCCBa2gAwIBAgITdQABcRT5qWrtS/4AZwADAAFxFDANBgkqhkiG9w0BAQ0F
...
HoaaWCJVuaNvg5dvdz+1pKge/osualYo4BjW5VNLWs0Is7tKwmiDvXGHULR6yuuD
uftvw7wO6kBO
-----END CERTIFICATE-----"

## copy and paste nopassword-key in here

KEY="-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA4thblVNIyFAK2PquAGMPuUU0gSmtqGEYCZkDCEpg2AaMx/CV
...
W1ZMpz+0hSuUDGcjYrseN7CErJxI8KF3CWHoS31sAh/Ad8u0nTpqgZEZbhDPBMqc
Kz8avhPidIiWty61UNxOi1o2+/TYS/zBiMGRfBy/3jBWBgJWLntt
-----END RSA PRIVATE KEY-----"

## copy and paste chain in here

CHAIN_CERT="-----BEGIN CERTIFICATE-----
MIIFfzCCBGegAwIBAgITJQABQuY+67PS+Tx6/QADAAFC5jANBgkqhkiG9w0BAQ0F
...
RI4VGeauTZxaMKAhjLOcL226hjjBxScI2hJFPdYHLP2Woc9C6NLeHldgzCz2yejt
/FHVQQllBf9Gsi4dXzl1wceibg==
-----END CERTIFICATE-----"

```
3. Save the `.env` file when complete
4. Run the app 
    * Through docker compose
        * `docker compose up`
    * Through node
        * `npm run app`
5. Open `output.json` file and then copy and paste json into AWS KMS
        
