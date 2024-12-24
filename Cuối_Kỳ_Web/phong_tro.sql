/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3307
 Source Schema         : phong_tro

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 22/12/2024 16:09:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for areas
-- ----------------------------
DROP TABLE IF EXISTS `areas`;
CREATE TABLE `areas`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `order` int NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of areas
-- ----------------------------
INSERT INTO `areas` VALUES (1, 1, '1', 'Viet nam', '2024-12-03 22:53:40', '2024-12-17 22:53:43');

-- ----------------------------
-- Table structure for attributes
-- ----------------------------
DROP TABLE IF EXISTS `attributes`;
CREATE TABLE `attributes`  (
  `id` varchar(255) CHARACTER SET utf8mb4  NOT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `acreage` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `published` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `hashtag` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of attributes
-- ----------------------------
INSERT INTO `attributes` VALUES ('24152c30-e6a2-490b-b4fc-9d54f7602f2e', '12 đồng/tháng', '3 m2', '21/12/2024', '#740123', '2024-12-21 16:24:04', '2024-12-21 16:24:04');
INSERT INTO `attributes` VALUES ('56b63223-3f81-4e19-95fb-127078cd7908', '123.00000000000001 đồng/tháng', '123 m2', '22/12/2024', '#623805', '2024-12-22 08:09:42', '2024-12-22 08:09:42');
INSERT INTO `attributes` VALUES ('622cc40c-a0b1-472f-93cd-380097928bdd', '123.00000000000001 đồng/tháng', '123 m2', '22/12/2024', '#433722', '2024-12-22 08:09:10', '2024-12-22 08:09:10');
INSERT INTO `attributes` VALUES ('7fd4ec9f-0110-4cb1-b432-9f4b80d650eb', '12 đồng/tháng', '3 m2', '21/12/2024', '#519165', '2024-12-21 16:23:31', '2024-12-21 16:23:31');
INSERT INTO `attributes` VALUES ('8fcd4687-07de-43ef-9ddf-037876b38161', '12221 đồng/tháng', '12 m2', '22/12/2024', '#262572', '2024-12-22 07:10:56', '2024-12-22 07:10:56');
INSERT INTO `attributes` VALUES ('a3a1bc63-1f63-45d3-ae68-b2f5fe7a62d7', '123.00000000000001 đồng/tháng', '123 m2', '22/12/2024', '#731223', '2024-12-22 08:07:55', '2024-12-22 08:07:55');
INSERT INTO `attributes` VALUES ('b0b57258-9971-4329-923b-b60d1cb4edac', '123.00000000000001 đồng/tháng', '123 m2', '22/12/2024', '#933220', '2024-12-22 08:08:02', '2024-12-22 08:08:02');
INSERT INTO `attributes` VALUES ('bf222486-9246-4323-af12-a37a531a0a7e', '12 đồng/tháng', '3 m2', '21/12/2024', '#544018', '2024-12-21 16:24:26', '2024-12-21 16:24:26');

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `header` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `subheader` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'ChungCu', 'Chung cư ', '2', '2', '2024-12-03 22:53:12', '2024-12-09 22:53:14');
INSERT INTO `categories` VALUES (3, 'NhaCap4', 'Nhà cấp 4', '3', '3', '2024-12-10 15:17:13', '2024-12-17 15:17:16');
INSERT INTO `categories` VALUES (4, 'Trọ', 'Trọ ', '33', '2', '2024-12-23 15:18:42', '2024-12-23 15:18:45');

-- ----------------------------
-- Table structure for images
-- ----------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images`  (
  `id` varchar(255) CHARACTER SET utf8mb4  NOT NULL,
  `image` longtext CHARACTER SET utf8mb4  NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of images
-- ----------------------------
INSERT INTO `images` VALUES ('1b8381b9-b2d6-4774-b6a2-75fa09b70bd7', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:07:55', '2024-12-22 08:07:55');
INSERT INTO `images` VALUES ('1b98bcc2-38a6-4906-a7fd-e2ce5f62fea0', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734857775/phongtrosv/ssjdjf1st6zpgyjeiwv4.jpg\"]', '2024-12-22 08:57:51', '2024-12-22 08:57:51');
INSERT INTO `images` VALUES ('335fa33e-4e20-42df-b042-8b71ff32b13e', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:14:37', '2024-12-22 08:14:37');
INSERT INTO `images` VALUES ('38ac7790-fe08-4175-bed2-fc258213044c', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:09:10', '2024-12-22 08:09:10');
INSERT INTO `images` VALUES ('45ed9f2a-78a6-4c90-8712-de0f874e054c', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734856071/phongtrosv/nlktlwq9fwim4qr8gaya.png\"]', '2024-12-22 08:27:56', '2024-12-22 08:27:56');
INSERT INTO `images` VALUES ('7cb1280f-c304-4e75-a7c0-1e50bfce7afc', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:15:15', '2024-12-22 08:15:15');
INSERT INTO `images` VALUES ('88b32f60-576b-4129-8893-d076f945c6af', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:08:02', '2024-12-22 08:08:02');
INSERT INTO `images` VALUES ('a97c652a-f071-4c7f-ab59-d7c4e797d0be', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734856365/phongtrosv/onjs8ivj2dsokdiq9h7s.png\"]', '2024-12-22 08:32:52', '2024-12-22 08:32:52');
INSERT INTO `images` VALUES ('af8669e6-3bdc-4ea0-9178-b1312613b408', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734857092/phongtrosv/cucpgvnms9vxifw0hnce.jpg\"]', '2024-12-22 08:47:46', '2024-12-22 08:47:46');
INSERT INTO `images` VALUES ('bc348b5a-d244-48f6-aeec-7c803d86bfcf', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734797880/phongtrosv/nz8rmbg0k5npmervowda.png\"]', '2024-12-21 16:24:26', '2024-12-21 16:24:26');
INSERT INTO `images` VALUES ('bd05b5cc-c8af-400c-936e-481b6043fbb4', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734797880/phongtrosv/nz8rmbg0k5npmervowda.png\"]', '2024-12-21 16:23:32', '2024-12-21 16:23:32');
INSERT INTO `images` VALUES ('cea49cdd-f86c-4c75-b341-2758efc54d24', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:14:06', '2024-12-22 08:14:06');
INSERT INTO `images` VALUES ('d8e40547-0d51-4d8d-9a81-eeca48a656e0', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:12:27', '2024-12-22 08:12:27');
INSERT INTO `images` VALUES ('e441d354-fb97-42db-a1b2-89cd5fd77228', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734854871/phongtrosv/rur8dlzp1ma8vfv6oiwm.png\"]', '2024-12-22 08:09:42', '2024-12-22 08:09:42');
INSERT INTO `images` VALUES ('f1da0006-372c-48ec-8445-a4ed05ca3bf7', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734797880/phongtrosv/nz8rmbg0k5npmervowda.png\"]', '2024-12-21 16:24:04', '2024-12-21 16:24:04');
INSERT INTO `images` VALUES ('faa98225-b400-49fe-978a-214e51c2b94e', '[\"https://res.cloudinary.com/dou22rzv1/image/upload/v1734851451/phongtrosv/jyu7f34t4w1tsz3dyuxu.png\"]', '2024-12-22 07:10:56', '2024-12-22 07:10:56');

-- ----------------------------
-- Table structure for labels
-- ----------------------------
DROP TABLE IF EXISTS `labels`;
CREATE TABLE `labels`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of labels
-- ----------------------------

-- ----------------------------
-- Table structure for overviews
-- ----------------------------
DROP TABLE IF EXISTS `overviews`;
CREATE TABLE `overviews`  (
  `id` varchar(255) CHARACTER SET utf8mb4  NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `area` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `target` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `bonus` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `created` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `expired` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of overviews
-- ----------------------------
INSERT INTO `overviews` VALUES ('0fdaabfc-c217-4839-8a18-20f6f6710cb0', '#740123', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Thứ 7, 23:24 21/12/2024', 'Thứ 2, 23:24 23/12/2024', '2024-12-21 16:24:04', '2024-12-21 16:24:04');
INSERT INTO `overviews` VALUES ('11342a50-2da8-4b83-8e80-e4a1c6d1e522', '#933220', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 15:8 22/12/2024', 'Thứ 6, 15:8 3/1/2025', '2024-12-22 08:08:02', '2024-12-22 08:08:02');
INSERT INTO `overviews` VALUES ('435e292b-67bd-4912-83d2-d527f91da1af', '#544018', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Thứ 7, 23:24 21/12/2024', 'Thứ 7, 23:24 4/1/2025', '2024-12-21 16:24:26', '2024-12-21 16:24:26');
INSERT INTO `overviews` VALUES ('4f4d6526-d3fe-495d-9df2-cbe1cc422cbf', '#433722', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 15:9 22/12/2024', 'Thứ 3, 15:9 24/12/2024', '2024-12-22 08:09:10', '2024-12-22 08:09:10');
INSERT INTO `overviews` VALUES ('5b6e362c-bdfc-4ce6-a310-6227cc9e7e41', '#257216', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 15:14 22/12/2024', 'Chủ nhật, 15:14 5/1/2025', '2024-12-22 08:14:37', '2024-12-22 08:14:37');
INSERT INTO `overviews` VALUES ('5d1b0711-ff66-4744-b0b4-77787c0fac59', '#731223', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 15:7 22/12/2024', 'Thứ 2, 15:7 30/12/2024', '2024-12-22 08:07:55', '2024-12-22 08:07:55');
INSERT INTO `overviews` VALUES ('c76c0dfc-f049-4a60-aa40-ad80bf445398', '#623805', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 15:9 22/12/2024', 'Thứ 5, 15:9 2/1/2025', '2024-12-22 08:09:42', '2024-12-22 08:09:42');
INSERT INTO `overviews` VALUES ('fcabd4d8-3e0c-4457-8638-4f6e953a2039', '#262572', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Chủ nhật, 14:10 22/12/2024', 'Thứ 4, 14:10 8/1/2025', '2024-12-22 07:10:56', '2024-12-22 07:10:56');
INSERT INTO `overviews` VALUES ('fe210d49-2b9b-4e01-874f-e05042559bc4', '#519165', 'Chung cư undefined', NULL, 'Nam', 'Tin thường', 'Thứ 7, 23:23 21/12/2024', 'Thứ 5, 23:23 9/1/2025', '2024-12-21 16:23:32', '2024-12-21 16:23:32');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` varchar(255) CHARACTER SET utf8mb4  NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT '0',
  `labelCode` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `attributesId` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `categoryCode` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `priceCode` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `areaCode` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `provinceCode` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4  NULL,
  `userId` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `overviewId` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `imagesId` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `priceNumber` float NULL DEFAULT NULL,
  `areaNumber` float NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('a5305fae-2bc6-44f0-a8b3-54b18e832f8e', 'Cho Thuê Phòng MT Quận 12 ,40m2, full nội thất, ban con 40m2 .', '0', '123', 'Quận Ba Đình, Thành phố Hà Nội', 'ae057439-cb69-479e-86c4-575c98621458', 'Trọ', NULL, NULL, '123', '\"Chính chủ Cho Thuê phòng Mặt tiền full nội thất sang trọng , ban con siêu đẹp và rộng .\\n- Không chung chủ , giờ giấc tự do , dưới nhà là quán cà phê .\\n🌿Phòng 40m², có thêm sân thượng to 40m². Đầy đủ nội thất như trong hình. Giá ưu đãi trong tháng cuối năm chỉ 4.2 triệu / tháng đang giảm giá còn 3.8 triệu .\\nĐ/c: Mặt tiền đường Nguyễn Thị Tràng, P. Hiệp Thành, Q.12\"', '1bd5ddae-ca88-4f41-a6e1-ccb7e2ad7f40', '8f1dba07-9723-4872-adc7-5154b8f047cc', 'af8669e6-3bdc-4ea0-9178-b1312613b408', 100, 50, '2024-12-22 08:47:46', '2024-12-22 08:47:46');
INSERT INTO `posts` VALUES ('b04419d9-cf35-4e08-9320-17a0228ed9f9', '✅BAN CÔNG LỚN + Full NỘI THẤT + GÁC CAO 2M + PHẠM VĂN CHIÊU', '0', '123', 'Thành phố Cao Bằng, Tỉnh Cao Bằng', '72225c59-cf1f-4f82-a06a-d3dbf32c4910', 'NhaCap4', NULL, NULL, '123', '\"📍198 Đường số 3, phường 9, Gò Vấp\\n\\nGiá 1 người 1 xe giảm giá lộc lá.\\n\\nNội thất: máy lạnh, tủ lạnh, tủ quần áo, kệ bếp, lò vi sóng, ấm điện, bếp điện, nước nóng lạnh…\\n\\nTiện ích: giờ giấc tự do, không chung chủ, ra vào vân tay, camra an ninh, máy giặt chung.\\n\\nChi phí: điện 3k5, nước 70k/người, rác + wifi 120k/phòng, giặt sấy 50k/người, free 2 xe\"', '1bd5ddae-ca88-4f41-a6e1-ccb7e2ad7f40', '84f51936-9274-4aac-b86b-b2f44648706d', '1b98bcc2-38a6-4906-a7fd-e2ce5f62fea0', 12.234, 12, '2024-12-22 08:57:51', '2024-12-22 08:57:51');

-- ----------------------------
-- Table structure for prices
-- ----------------------------
DROP TABLE IF EXISTS `prices`;
CREATE TABLE `prices`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `order` int NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of prices
-- ----------------------------

-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of provinces
-- ----------------------------

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('create-area.js');
INSERT INTO `sequelizemeta` VALUES ('create-attribute.js');
INSERT INTO `sequelizemeta` VALUES ('create-category.js');
INSERT INTO `sequelizemeta` VALUES ('create-image.js');
INSERT INTO `sequelizemeta` VALUES ('create-label.js');
INSERT INTO `sequelizemeta` VALUES ('create-overview.js');
INSERT INTO `sequelizemeta` VALUES ('create-post.js');
INSERT INTO `sequelizemeta` VALUES ('create-price.js');
INSERT INTO `sequelizemeta` VALUES ('create-province.js');
INSERT INTO `sequelizemeta` VALUES ('create-user.js');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` varchar(255) CHARACTER SET utf8mb4  NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `zalo` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `fbUrl` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `avatar` longblob NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1bd5ddae-ca88-4f41-a6e1-ccb7e2ad7f40', 'Super Admin', '$2a$12$aTRxFbmmkrGjRbPzTDG4me9yuKck6kyXzAe0OjP6huRigwnNIVJyi', '0999999999', NULL, NULL, NULL, '2024-12-21 15:49:32', '2024-12-21 15:49:32');

SET FOREIGN_KEY_CHECKS = 1;
