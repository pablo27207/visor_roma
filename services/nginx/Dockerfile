FROM nginx:1.25

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY chain.crt /etc/ssl/chain.crt
COPY roma.key /etc/ssl/roma.key
