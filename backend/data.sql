CREATE DATABASE  IF NOT EXISTS `khanh` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `khanh`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: khanh
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tourism`
--

DROP TABLE IF EXISTS `tourism`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `vehcel` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `type_tour` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism`
--

LOCK TABLES `tourism` WRITE;
/*!40000 ALTER TABLE `tourism` DISABLE KEYS */;
INSERT INTO `tourism` VALUES (1,'Hà Nội City Tour','1 ngày',500000,'Xe bus','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/san-pham/cantho0.jpg'),(2,'Hạ Long Bay Cruise','2 ngày 1 đêm',1500000,'Tàu','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/tra/nhacongtubaclieu-01-1.jpg'),(3,'Sa Pa Adventure','3 ngày 2 đêm',2000000,'Xe khách','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/a-2-be-ca-con-son.jpg'),(4,'Phú Quốc Island','4 ngày 3 đêm',3000000,'Máy bay','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/4-min.jpg'),(5,'Đà Nẵng City Tour','1 ngày',600000,'Xe bus','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/kinh-nghiem-di-cho-noi-cai-rang-tu-tuc-chi-tiet-nhat-1649950411.jpg'),(6,'Mekong Delta Tour','2 ngày 1 đêm',1200000,'Tàu','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/chua-doi.jpg'),(7,'Vịnh Cam Ranh','3 ngày 2 đêm',2500000,'Tàu','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/image_jyp1637813460.jpg'),(8,'Ninh Bình Tour','1 ngày',800000,'Xe bus','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/giai-1-cho-noi-cr-large.jpg?t=1729671385'),(9,'Huế Heritage','2 ngày 1 đêm',1300000,'Xe khách','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/tra/1.jpg?t=1729070908'),(10,'Hồ Chí Minh City Tour','1 ngày',550000,'Xe bus','Trong nước','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/tour-mien-nam/TOUR%20MI%E1%BB%80N%20T%C3%82Y/rung-tram-tra-su-an-giang-1-1536x1536.jpg'),(11,'Malaysia','3 ngày 2 đêm',15000000,'Máy bay','Nước ngoài','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/sing%203.jpg'),(12,'Thái Lan','5 ngày 4 đêm',12000000,'Máy bay','Nước ngoài','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/dong-song-huyen-thoai-chao-phraya-5e8c1cab46c81-compressed.jpg?t=1678111112'),(13,'Dubai','7 ngày 6 đêm',30000000,'Máy bay','Nước ngoài','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/files/di-dubai-co-can-visa-khong-3.jpg?t=1678780558'),(14,'Tour Pháp','1 ngày',500000,'Tàu','Nước Ngoài ','https://www.vietnamtravelgroup.com.vn/datafiles/32985/upload/images/albums/tour-phap-1.png?t=1648701606');
/*!40000 ALTER TABLE `tourism` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07  0:21:25
