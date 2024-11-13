/*
 Navicat Premium Data Transfer

 Source Server         : RRR
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : web_explorer

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 13/11/2024 20:51:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for folders
-- ----------------------------
DROP TABLE IF EXISTS `folders`;
CREATE TABLE `folders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `parent_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent_id`(`parent_id` ASC) USING BTREE,
  CONSTRAINT `folders_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `folders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of folders
-- ----------------------------
INSERT INTO `folders` VALUES (1, 'Root 1', NULL);
INSERT INTO `folders` VALUES (2, 'Folder 1', 1);
INSERT INTO `folders` VALUES (3, 'Folder 2', 1);
INSERT INTO `folders` VALUES (4, 'File Folder 1.1', 2);
INSERT INTO `folders` VALUES (5, 'File Folder 2.1', 3);
INSERT INTO `folders` VALUES (6, 'File Folder 2.2', 3);
INSERT INTO `folders` VALUES (7, 'Root 2', NULL);

SET FOREIGN_KEY_CHECKS = 1;
