# alpine-node22 başlatıyoruz
FROM node:22-alpine
# Çalışma dizinini /app çekiyoruz
WORKDIR /app
# package dosyalarını app dizinine kopyalıyoruz ve npm install çekip dependencies'leri kuruyoruz
COPY package*.json ./
RUN npm install
# mevcut klasörleri workdir içine aynen kopyala
COPY . .
# build et (tsc) ve build bittikten sonra container kalkınca node dist/index.js ile projeyi başlat !
RUN npm run build
CMD ["node", "dist/index.js"]