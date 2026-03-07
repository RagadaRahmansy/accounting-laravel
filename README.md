<p align="center"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="200" alt="Laravel Logo"></p>

<p align="center">
<img src="https://img.shields.io/badge/Laravel-9.x-red?style=for-the-badge" alt="Laravel Version">
<img src="https://img.shields.io/badge/PHP-8.0+-777BB4?style=for-the-badge" alt="PHP Version">
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

# Aplikasi Akunting Raga

Aplikasi akunting berbasis web yang dibangun dengan Laravel 9 dan Livewire untuk membantu pengelolaan keuangan bisnis.

## 📋 Fitur

### Modul Utama
- **Dashboard** - Ringkasan keuangan (pemasukan, pengeluaran, hutang, angsuran)
- **Transaksi** - Pencatatan keuangan harian (pemasukan/pengeluaran)
- **Project** - Manajemen proyek
- **Kategori** - Kategori transaksi dan item
- **Stock** - Inventori barang dan alokasi
- **Data Hutang** - Manajemen piutang customer
- **Data Penjualan** - Sistem Cicilan (Layaway)
- **Kontraktor** - Manajemen kontraktor
- **Laporan** - Laporan keuangan lengkap
  - Laporan Pengeluaran
  - Laporan Pemasukan
  - Laporan Gabungan (Pengeluaran & Pemasukan)
  - Riwayat Keuangan

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|------------|
| Framework | Laravel 9.x |
| PHP | ^8.0 |
| Frontend | AdminLTE 3.x + Livewire 2.x |
| Database | MySQL |
| Authentication | Laravel Sanctum |

## 📦 Installation

1. Clone repository
```bash
git clone <repository-url>
cd Akunting
```

2. Install dependencies
```bash
composer install
npm install
```

3. Setup environment
```bash
cp .env.example .env
```

4. Configure database di `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelraga
DB_USERNAME=root
DB_PASSWORD=
```

5. Generate application key
```bash
php artisan key:generate
```

6. Run migration dan seeder
```bash
php artisan migrate --seed
```

7. Start development server
```bash
php artisan serve
```

Buka http://127.0.0.1:8000 di browser.

## 🔐 Default Login

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | admin |

## 📁 Struktur Project

```
app/
├── Http/
│   ├── Controllers/     # MVC Controllers
│   ├── Livewire/       # Livewire Components
│   └── Middleware/     # Route Middleware
├── Models/             # Eloquent Models
└── Providers/          # Service Providers

resources/views/
├── pages/             # Page Views
├── livewire/          # Livewire Component Views
└── errors/            # Custom Error Pages

config/                # Configuration Files
database/
├── migrations/        # Database Migrations
└── seeders/          # Database Seeders
```

## 🔧 Configuration

### Logging Channels

Aplikasi menggunakan multiple logging channels:
- `single` - General application logs
- `daily` - Daily rotating logs (14 days)
- `error` - Error-only logs (30 days)
- `security` - Security event logs (30 days)
- `query` - Database query logs (7 days)

Lokasi log: `storage/logs/`

### Rate Limiting

- Login routes: 10 requests per menit
- Authenticated routes: 60 requests per menit

## 🚀 Production Deployment

1. Set environment:
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://domain-anda.com
```

2. Optimize application:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
composer dump-autoload -o
```

3. Setup queue worker (jika menggunakan):
```bash
# Using Supervisor
php artisan queue:work redis --sleep=3 --tries=3
```

4. Setup automated backup (disarankan):
```bash
composer require spatie/laravel-backup
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
```

## 📝 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👤 Author

Raga - https://github.com/raga
