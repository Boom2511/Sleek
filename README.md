# Sleek EV

ระบบ backend แบบ microservices/monorepo สำหรับบริการการจองสถาณีชาร์จไฟฟ้า (NestJS + Prisma + Redis + RabbitMQ)

Status: In development


## Architecture

![architecture](.assets/api_gateway_integration.png)


- Monorepo (โฟลเดอร์ `apps/` สำหรับแต่ละ service, `libs/` สำหรับ shared code)
- Framework: NestJS (TypeScript)
- Database: PostgreSQL (Prisma ORM)
- Messaging: RabbitMQ
- Cache / Session: Redis / Keyv
- Realtime: Socket.IO (websockets)
- Logging: Winston (nest-winston)
- Testing: Postman (unit test)

## Structure
- `apps/` — แต่ละ service (api-gateway, auth, booking, notification)
- `libs/` — shared libraries (common, config, database, logger, rabbitmq, redis, utils)
- `prisma/` — (อยู่ใน `libs/database/prisma`) — schema, migrations
- `package.json` — สคริปต์ที่ใช้บ่อย

## Booking sequence

![architecture](.assets/booking_sequence.png)

## Quickstart

ติดตั้ง dependencies:
```bash
pnpm install
```

Ex:run services:
```bash
pnpm nest start api-gateway --watch
pnpm nest start auth --watch
pnpm nest start booking --watch  
pnpm nest start notification --watch 

Prisma (DB migrations / generate):
```bash
pnpm run prisma:generate
pnpm run prisma:migrate
pnpm run prisma:studio
```

## Environment variables
ตัวอย่างไฟล์ `.env.example` 
```
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# Redis
REDIS_URL=redis://localhost:6379

# RabbitMQ
RABBITMQ_URL=amqp://guest:guest@localhost:5672

# JWT
JWT_SECRET=your_jwt_secret

## Docker / docker-compose
โปรเจกต์นี้สามารถรันด้วย Docker เพื่อความสะดวกในการตั้งค่าสภาพแวดล้อม (DB, Redis, RabbitMQ) และ deployment แบบ containerized


รันโดยใช้ docker-compose (development):

```bash
docker compose up --build
```

ถ้าต้องการรันเฉพาะ database services:
```bash
docker compose up postgres redis rabbitmq
```

## Tips:
- ตรวจสอบว่า `DATABASE_URL`, `REDIS_URL`, `RABBITMQ_URL`, `JWT_SECRET` ถูกกำหนดใน environment หรือ `docker-compose.yml`
- ระวังเรื่อง volume permission (บน Windows อาจต้องปรับการตั้งค่า path/mount)


## ข้อควรระวัง 
- ตรวจสอบ version ของ Redis/Prisma/Node ตามที่ repo ต้องการ
- ถ้ารันหลาย service พร้อมกัน ให้ตรวจสอบ ports และ configs ใน `.env`

## ติดต่อ 
- Watthanachai Suksukree
- watthanachai200746@gmail.com  
- 090-995-8383
