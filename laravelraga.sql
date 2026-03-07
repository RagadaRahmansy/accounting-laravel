-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 16 Feb 2023 pada 09.14
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravelraga`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `contractors`
--

CREATE TABLE `contractors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contractor_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contractor_wa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `interval` enum('week','month') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `contractor_details`
--

CREATE TABLE `contractor_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contractor_id` bigint(20) UNSIGNED NOT NULL,
  `periode` int(11) NOT NULL,
  `pay` int(11) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `jatuh_tempo` date NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `items_categories`
--

CREATE TABLE `items_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `items_categories`
--

INSERT INTO `items_categories` (`id`, `name`, `note`, `created_at`, `updated_at`) VALUES
(1, 'Material Bangunan', '-', NULL, NULL),
(2, 'ATK', '-', NULL, NULL),
(3, 'Konsumsi', '-', NULL, NULL),
(4, 'Perkakas', '-', NULL, NULL),
(5, 'Alat Elektronik', '-', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `layaways`
--

CREATE TABLE `layaways` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `is_finish` tinyint(1) NOT NULL DEFAULT 0,
  `customer_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_wa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tenor` int(11) NOT NULL,
  `project` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `block` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `layaways`
--

INSERT INTO `layaways` (`id`, `is_finish`, `customer_name`, `customer_wa`, `tenor`, `project`, `block`, `price`, `note`, `created_at`, `updated_at`) VALUES
(1, 0, 'Customer A', '082211113333', 24, 'Dmashome', 'D3', 950000000, '-', '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(2, 0, 'Customer B', '0822444455555', 12, 'Abinaya', 'C4', 750000000, '-', '2023-02-16 08:10:40', '2023-02-16 08:10:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `layaway_details`
--

CREATE TABLE `layaway_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `layaway_id` bigint(20) UNSIGNED NOT NULL,
  `month` int(11) NOT NULL,
  `jatuh_tempo` date NOT NULL,
  `paid` int(11) DEFAULT NULL,
  `paid_at` date DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `layaway_details`
--

INSERT INTO `layaway_details` (`id`, `layaway_id`, `month`, `jatuh_tempo`, `paid`, `paid_at`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-01-20', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(2, 1, 2, '2023-02-19', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(3, 1, 3, '2023-03-21', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(4, 1, 4, '2023-04-20', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(5, 1, 5, '2023-05-20', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(6, 1, 6, '2023-06-19', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(7, 1, 7, '2023-07-19', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(8, 1, 8, '2023-08-18', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(9, 1, 9, '2023-09-17', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(10, 1, 10, '2023-10-17', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(11, 1, 11, '2023-11-16', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(12, 1, 12, '2023-12-16', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(13, 1, 13, '2024-01-15', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(14, 1, 14, '2024-02-14', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(15, 1, 15, '2024-03-15', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(16, 1, 16, '2024-04-14', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(17, 1, 17, '2024-05-14', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(18, 1, 18, '2024-06-13', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(19, 1, 19, '2024-07-13', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(20, 1, 20, '2024-08-12', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(21, 1, 21, '2024-09-11', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(22, 1, 22, '2024-10-11', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(23, 1, 23, '2024-11-10', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(24, 1, 24, '2024-12-10', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(25, 2, 1, '2023-02-16', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(26, 2, 2, '2023-03-18', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(27, 2, 3, '2023-04-17', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(28, 2, 4, '2023-05-17', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(29, 2, 5, '2023-06-16', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(30, 2, 6, '2023-07-16', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(31, 2, 7, '2023-08-15', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(32, 2, 8, '2023-09-14', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(33, 2, 9, '2023-10-14', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(34, 2, 10, '2023-11-13', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(35, 2, 11, '2023-12-13', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(36, 2, 12, '2024-01-12', NULL, NULL, NULL, '2023-02-16 08:10:40', '2023-02-16 08:10:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_01_21_115729_create_stock_table', 1),
(5, '2023_01_21_120204_create_stock_histories_table', 1),
(6, '2023_01_21_121852_create_items_categories_table', 1),
(7, '2023_01_21_122533_create_trx_types_table', 1),
(8, '2023_01_21_122720_create_transcations_table', 1),
(9, '2023_01_24_163341_create_layaways_table', 1),
(10, '2023_02_01_201459_create_layaway_details_table', 1),
(11, '2023_02_07_094557_create_contractors_table', 1),
(12, '2023_02_07_094618_create_contractor_details_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `stocks`
--

CREATE TABLE `stocks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `stocks`
--

INSERT INTO `stocks` (`id`, `category_id`, `name`, `quantity`, `unit`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 'Semen', 0, 'sak', '-', NULL, NULL),
(2, 2, 'Batu-Bata', 0, 'pickup', '', NULL, NULL),
(3, 3, 'Kertas', 0, 'rim', '', NULL, NULL),
(4, 1, 'Semen', 0, 'sak', '-', NULL, NULL),
(5, 2, 'Batu-Bata', 0, 'pickup', '', NULL, NULL),
(6, 3, 'Kertas', 0, 'rim', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock_histories`
--

CREATE TABLE `stock_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stock_id` bigint(20) UNSIGNED NOT NULL,
  `alocate_to` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action` enum('in','modify','out') COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transcations`
--

CREATE TABLE `transcations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `final_price` int(11) NOT NULL,
  `unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('lunas','hutang','cash') COLLATE utf8mb4_unicode_ci NOT NULL,
  `jatuh_tempo` date DEFAULT NULL,
  `paid_at` date DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transcations`
--

INSERT INTO `transcations` (`id`, `type_id`, `name`, `quantity`, `price`, `final_price`, `unit`, `status`, `jatuh_tempo`, `paid_at`, `note`, `created_at`, `updated_at`) VALUES
(1, 8, 'Pembelian semen', 20, 80000, 1600000, 'sak', 'cash', NULL, NULL, NULL, '2023-02-06 08:10:40', '2023-02-16 08:10:40'),
(2, 8, 'Pembelian Cat', 5, 50000, 250000, 'kaleng', 'cash', NULL, NULL, NULL, '2023-02-09 08:10:40', '2023-02-16 08:10:40'),
(3, 8, 'Pembelian Paku', 3, 20000, 60000, 'kg', 'cash', NULL, NULL, NULL, '2023-02-10 08:10:40', '2023-02-16 08:10:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `trx_types`
--

CREATE TABLE `trx_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cash_flow` enum('in','out') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `trx_types`
--

INSERT INTO `trx_types` (`id`, `name`, `cash_flow`, `created_at`, `updated_at`) VALUES
(1, 'Pembelian Material', 'out', NULL, NULL),
(2, 'Pembayaran Jasa', 'out', NULL, NULL),
(3, 'Pembelian Keperluan Kantor', 'out', NULL, NULL),
(4, 'Pembelian Keperluan Konsumsi', 'out', NULL, NULL),
(5, 'Pembayaran Sewa', 'out', NULL, NULL),
(6, 'DP Penjualan Rumah', 'in', NULL, NULL),
(7, 'Angsuran Penjualan Rumah', 'in', NULL, NULL),
(8, 'Pelunasan', 'in', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('superadmin','admin','viewer') COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `full_name`, `username`, `role`, `password`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', 'superadmin', 'superadmin', '$2y$10$lpOobowdhAOE9iAXaNgXv.nPv46/xwcy.zhQWq/zV0rxY5aa9veui', NULL, NULL),
(2, 'admin', 'admin', 'admin', '$2y$10$1voloouv8AanWUd16Li7w.XRvQ4IZ0qgt6I95ZrJ.xx/Dh3BvaSKO', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `contractors`
--
ALTER TABLE `contractors`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `contractor_details`
--
ALTER TABLE `contractor_details`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `items_categories`
--
ALTER TABLE `items_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `layaways`
--
ALTER TABLE `layaways`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `layaway_details`
--
ALTER TABLE `layaway_details`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stock_histories`
--
ALTER TABLE `stock_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transcations`
--
ALTER TABLE `transcations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `trx_types`
--
ALTER TABLE `trx_types`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `contractors`
--
ALTER TABLE `contractors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `contractor_details`
--
ALTER TABLE `contractor_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `items_categories`
--
ALTER TABLE `items_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `layaways`
--
ALTER TABLE `layaways`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `layaway_details`
--
ALTER TABLE `layaway_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `stock_histories`
--
ALTER TABLE `stock_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `transcations`
--
ALTER TABLE `transcations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `trx_types`
--
ALTER TABLE `trx_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
