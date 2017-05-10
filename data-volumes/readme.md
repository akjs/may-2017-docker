Create a Docker Volume
```bash
docker volume create --name mydata
```
Run an image that uses the value
```
docker run -d --name myserver -v mydata:/usr/share/nginx/html -p 4554:80 nginx
```
Inspect the volume
```
docker inspect -f '{{ .Mounts }}' myserver
```
Inspect the volume
```
docker volume inspect mydata
```
Remove the volume
```
docker volume rm mydata
```
Run an image and map to a local directory
```
docker run -d --name myserver2 -v {directory}:/usr/share/nginx/html -p 4555:80 ft
```
