-- CreateTable
CREATE OR REPLACE TABLE `logs`
(
    `id`         INTEGER      NOT NULL AUTO_INCREMENT,
    `route`      VARCHAR(191) NOT NULL,
    `method`     ENUM ('GET', 'POST', 'PUT', 'PATCH', 'DELETE') NOT NULL,
    `ip`         VARCHAR(64)  NOT NULL,
    `body`       TEXT NULL,
    `query`      TEXT NULL,
    `auth_token` TEXT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
