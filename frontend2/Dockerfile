FROM node:18

RUN apt update && apt upgrade -y

RUN mkdir /app
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT /entrypoint.sh
