#!/bin/sh
set -e

cd /app/api && API_URL="http://127.0.0.1/" node src/cobalt &

exec nginx -g 'daemon off;'
