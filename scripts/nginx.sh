docker pull nginx
docker rm -f nginx

ip=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)

docker run --name nginx \
-v "$(pwd)"/logs:/var/log/nginx \
-v "$(pwd)"/.nginx/nginx.conf:/etc/nginx/nginx.conf \
-v ~/nginx/www:/usr/share/nginx/html \
--add-host="host:${ip}" \
-p 80:80 \
--rm \
-d nginx
