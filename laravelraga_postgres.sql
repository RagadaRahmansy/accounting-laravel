-- PostgreSQL Setup for 'laravelraga' Database
-- Converted from MySQL schema dump

BEGIN;

CREATE TABLE contractors (
  id BIGSERIAL PRIMARY KEY,
  contractor_name VARCHAR(255) NOT NULL,
  contractor_wa VARCHAR(255) NOT NULL,
  keterangan VARCHAR(255) NOT NULL,
  "interval" VARCHAR(10) NOT NULL CHECK ("interval" IN ('week','month')),
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE contractor_details (
  id BIGSERIAL PRIMARY KEY,
  contractor_id BIGINT NOT NULL,
  periode INTEGER NOT NULL,
  pay INTEGER DEFAULT NULL,
  payment_date DATE DEFAULT NULL,
  jatuh_tempo DATE NOT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE failed_jobs (
  id BIGSERIAL PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL UNIQUE,
  connection TEXT NOT NULL,
  queue TEXT NOT NULL,
  payload TEXT NOT NULL,
  exception TEXT NOT NULL,
  failed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items_categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO items_categories (id, name, note, created_at, updated_at) VALUES
(1, 'Material Bangunan', '-', NULL, NULL),
(2, 'ATK', '-', NULL, NULL),
(3, 'Konsumsi', '-', NULL, NULL),
(4, 'Perkakas', '-', NULL, NULL),
(5, 'Alat Elektronik', '-', NULL, NULL);

SELECT setval('items_categories_id_seq', (SELECT MAX(id) FROM items_categories));

CREATE TABLE layaways (
  id BIGSERIAL PRIMARY KEY,
  is_finish BOOLEAN NOT NULL DEFAULT FALSE,
  customer_name VARCHAR(255) NOT NULL,
  customer_wa VARCHAR(255) NOT NULL,
  tenor INTEGER NOT NULL,
  project VARCHAR(255) NOT NULL,
  block VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO layaways (id, is_finish, customer_name, customer_wa, tenor, project, block, price, note, created_at, updated_at) VALUES
(1, FALSE, 'Customer A', '082211113333', 24, 'Dmashome', 'D3', 950000000, '-', '2023-02-16 08:10:40', '2023-02-16 08:10:40'),
(2, FALSE, 'Customer B', '0822444455555', 12, 'Abinaya', 'C4', 750000000, '-', '2023-02-16 08:10:40', '2023-02-16 08:10:40');

SELECT setval('layaways_id_seq', (SELECT MAX(id) FROM layaways));

CREATE TABLE layaway_details (
  id BIGSERIAL PRIMARY KEY,
  layaway_id BIGINT NOT NULL,
  "month" INTEGER NOT NULL,
  jatuh_tempo DATE NOT NULL,
  paid INTEGER DEFAULT NULL,
  paid_at DATE DEFAULT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO layaway_details (id, layaway_id, month, jatuh_tempo, paid, paid_at, note, created_at, updated_at) VALUES
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

SELECT setval('layaway_details_id_seq', (SELECT MAX(id) FROM layaway_details));

CREATE TABLE migrations (
  id SERIAL PRIMARY KEY,
  migration VARCHAR(255) NOT NULL,
  batch INTEGER NOT NULL
);

INSERT INTO migrations (id, migration, batch) VALUES
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

SELECT setval('migrations_id_seq', (SELECT MAX(id) FROM migrations));

CREATE TABLE personal_access_tokens (
  id BIGSERIAL PRIMARY KEY,
  tokenable_type VARCHAR(255) NOT NULL,
  tokenable_id BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL,
  token VARCHAR(64) NOT NULL UNIQUE,
  abilities TEXT DEFAULT NULL,
  last_used_at TIMESTAMP NULL DEFAULT NULL,
  expires_at TIMESTAMP NULL DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON personal_access_tokens (tokenable_type, tokenable_id);

CREATE TABLE stocks (
  id BIGSERIAL PRIMARY KEY,
  category_id BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  unit VARCHAR(255) DEFAULT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO stocks (id, category_id, name, quantity, unit, note, created_at, updated_at) VALUES
(1, 1, 'Semen', 0, 'sak', '-', NULL, NULL),
(2, 2, 'Batu-Bata', 0, 'pickup', '', NULL, NULL),
(3, 3, 'Kertas', 0, 'rim', '', NULL, NULL),
(4, 1, 'Semen', 0, 'sak', '-', NULL, NULL),
(5, 2, 'Batu-Bata', 0, 'pickup', '', NULL, NULL),
(6, 3, 'Kertas', 0, 'rim', '', NULL, NULL);

SELECT setval('stocks_id_seq', (SELECT MAX(id) FROM stocks));

CREATE TABLE stock_histories (
  id BIGSERIAL PRIMARY KEY,
  stock_id BIGINT NOT NULL,
  alocate_to VARCHAR(255) NOT NULL,
  "action" VARCHAR(10) NOT NULL CHECK ("action" IN ('in','modify','out')),
  quantity INTEGER NOT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE transcations (
  id BIGSERIAL PRIMARY KEY,
  type_id BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  final_price INTEGER NOT NULL,
  unit VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('lunas','hutang','cash')),
  jatuh_tempo DATE DEFAULT NULL,
  paid_at DATE DEFAULT NULL,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO transcations (id, type_id, name, quantity, price, final_price, unit, status, jatuh_tempo, paid_at, note, created_at, updated_at) VALUES
(1, 8, 'Pembelian semen', 20, 80000, 1600000, 'sak', 'cash', NULL, NULL, NULL, '2023-02-06 08:10:40', '2023-02-16 08:10:40'),
(2, 8, 'Pembelian Cat', 5, 50000, 250000, 'kaleng', 'cash', NULL, NULL, NULL, '2023-02-09 08:10:40', '2023-02-16 08:10:40'),
(3, 8, 'Pembelian Paku', 3, 20000, 60000, 'kg', 'cash', NULL, NULL, NULL, '2023-02-10 08:10:40', '2023-02-16 08:10:40');

SELECT setval('transcations_id_seq', (SELECT MAX(id) FROM transcations));

CREATE TABLE trx_types (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cash_flow VARCHAR(10) NOT NULL CHECK (cash_flow IN ('in','out')),
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO trx_types (id, name, cash_flow, created_at, updated_at) VALUES
(1, 'Pembelian Material', 'out', NULL, NULL),
(2, 'Pembayaran Jasa', 'out', NULL, NULL),
(3, 'Pembelian Keperluan Kantor', 'out', NULL, NULL),
(4, 'Pembelian Keperluan Konsumsi', 'out', NULL, NULL),
(5, 'Pembayaran Sewa', 'out', NULL, NULL),
(6, 'DP Penjualan Rumah', 'in', NULL, NULL),
(7, 'Angsuran Penjualan Rumah', 'in', NULL, NULL),
(8, 'Pelunasan', 'in', NULL, NULL);

SELECT setval('trx_types_id_seq', (SELECT MAX(id) FROM trx_types));

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  "role" VARCHAR(20) NOT NULL CHECK ("role" IN ('superadmin','admin','viewer')),
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO users (id, full_name, username, role, password, created_at, updated_at) VALUES
(1, 'superadmin', 'superadmin', 'superadmin', '$2y$10$lpOobowdhAOE9iAXaNgXv.nPv46/xwcy.zhQWq/zV0rxY5aa9veui', NULL, NULL),
(2, 'admin', 'admin', 'admin', '$2y$10$1voloouv8AanWUd16Li7w.XRvQ4IZ0qgt6I95ZrJ.xx/Dh3BvaSKO', NULL, NULL);

SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));

COMMIT;
