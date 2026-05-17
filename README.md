# HR System — คู่มือติดตั้ง

## ขั้นตอน 1: รัน SQL ใน Supabase

1. เปิด https://supabase.com → เข้า Project ของคุณ
2. ไปที่ **SQL Editor** → **New Query**
3. เปิดไฟล์ `supabase_setup.sql` → Copy ทั้งหมด → Paste ใส่ → กด **Run**
4. ตรวจสอบที่ **Table Editor** ว่ามีตาราง employees, attendances, offices, leaves, payroll

## ขั้นตอน 2: ใส่ Supabase API Key

1. เปิด **Supabase → Settings → API**
2. Copy **anon public** key
3. เปิดไฟล์ `index.html` แก้บรรทัดนี้:

```javascript
const SUPABASE_KEY = 'YOUR_ANON_KEY_HERE';
```

แทนที่ `YOUR_ANON_KEY_HERE` ด้วย key ของคุณ (ยาวมาก ขึ้นต้นด้วย eyJ...)

## ขั้นตอน 3: สร้าง Icon

1. ไปที่ https://favicon.io/favicon-generator/
2. สร้าง icon ตัว "HR" → Download
3. เปลี่ยนชื่อไฟล์เป็น icon-192.png และ icon-512.png
4. ใส่ไว้ในโฟลเดอร์ `icons/`

## ขั้นตอน 4: Upload ขึ้น GitHub

1. เปิด https://github.com/flowengineering1/hr
2. กด **Add file** → **Upload files**
3. ลากไฟล์ทั้งหมดใส่ (index.html, manifest.json, sw.js, icons/)
4. กด **Commit changes**

## ขั้นตอน 5: เปิดบนมือถือ

- URL: https://flowengineering1.github.io/hr
- **iPhone**: เปิดด้วย Safari → Share → Add to Home Screen
- **Android**: เปิดด้วย Chrome → เมนู ⋮ → Add to Home Screen

## ขั้นตอน 6: ตั้งค่าออฟฟิศ

1. เปิดแอป → โปรไฟล์ → จัดการออฟฟิศ
2. แก้ไข Latitude/Longitude ให้ตรงกับที่อยู่ออฟฟิศจริง
3. (หา lat/lng: เปิด Google Maps → คลิกขวาที่ออฟฟิศ → Copy พิกัด)

---

URL ของระบบ: https://flowengineering1.github.io/hr
