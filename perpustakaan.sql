SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
DROP DATABASE IF EXISTS perpustakaan;
CREATE DATABASE perpustakaan;

USE perpustakaan;

DROP TABLE IF EXISTS buku;
CREATE TABLE buku (
  id int(10) PRIMARY KEY,
  judul varchar(128) NOT NULL,
  pengarang varchar(128) NOT NULL,
  penerbit varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO buku VALUES
  ('3433' , 'BELAJAR DATABASE' , 'AHMAD YUSRON' , 'NINDY GRAFIKA');