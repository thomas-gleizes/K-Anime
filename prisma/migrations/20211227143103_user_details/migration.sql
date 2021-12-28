-- AlterTable
ALTER TABLE `users`
    ADD COLUMN `bio` TEXT NULL,
    ADD COLUMN `birthday` DATE NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `country_id` INTEGER NULL,
    ADD COLUMN `gender` ENUM('Male', 'Female', 'Secret') NOT NULL DEFAULT 'Secret';

-- CreateTable
CREATE TABLE `countries`
(
    `id`       INTEGER     NOT NULL AUTO_INCREMENT,
    `iso`      CHAR(2)     NOT NULL,
    `iso3`     VARCHAR(3) NULL,
    `name`     VARCHAR(80) NOT NULL,
    `nicename` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users`
    ADD CONSTRAINT `users_country_id_fkey` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

insert into kanime_dev.countries (id, iso, iso3, name, nicename)
values (1, 'AF', 'AFG', 'AFGHANISTAN', 'Afghanistan'),
       (2, 'AL', 'ALB', 'ALBANIA', 'Albania'),
       (3, 'DZ', 'DZA', 'ALGERIA', 'Algeria'),
       (4, 'AS', 'ASM', 'AMERICAN SAMOA', 'American Samoa'),
       (5, 'AD', 'AND', 'ANDORRA', 'Andorra'),
       (6, 'AO', 'AGO', 'ANGOLA', 'Angola'),
       (7, 'AI', 'AIA', 'ANGUILLA', 'Anguilla'),
       (8, 'AQ', null, 'ANTARCTICA', 'Antarctica'),
       (9, 'AG', 'ATG', 'ANTIGUA AND BARBUDA', 'Antigua and Barbuda'),
       (10, 'AR', 'ARG', 'ARGENTINA', 'Argentina'),
       (11, 'AM', 'ARM', 'ARMENIA', 'Armenia'),
       (12, 'AW', 'ABW', 'ARUBA', 'Aruba'),
       (13, 'AU', 'AUS', 'AUSTRALIA', 'Australia'),
       (14, 'AT', 'AUT', 'AUSTRIA', 'Austria'),
       (15, 'AZ', 'AZE', 'AZERBAIJAN', 'Azerbaijan'),
       (16, 'BS', 'BHS', 'BAHAMAS', 'Bahamas'),
       (17, 'BH', 'BHR', 'BAHRAIN', 'Bahrain'),
       (18, 'BD', 'BGD', 'BANGLADESH', 'Bangladesh'),
       (19, 'BB', 'BRB', 'BARBADOS', 'Barbados'),
       (20, 'BY', 'BLR', 'BELARUS', 'Belarus'),
       (21, 'BE', 'BEL', 'BELGIUM', 'Belgium'),
       (22, 'BZ', 'BLZ', 'BELIZE', 'Belize'),
       (23, 'BJ', 'BEN', 'BENIN', 'Benin'),
       (24, 'BM', 'BMU', 'BERMUDA', 'Bermuda'),
       (25, 'BT', 'BTN', 'BHUTAN', 'Bhutan'),
       (26, 'BO', 'BOL', 'BOLIVIA', 'Bolivia'),
       (27, 'BA', 'BIH', 'BOSNIA AND HERZEGOVINA', 'Bosnia and Herzegovina'),
       (28, 'BW', 'BWA', 'BOTSWANA', 'Botswana'),
       (29, 'BV', null, 'BOUVET ISLAND', 'Bouvet Island'),
       (30, 'BR', 'BRA', 'BRAZIL', 'Brazil'),
       (31, 'IO', null, 'BRITISH INDIAN OCEAN TERRITORY', 'British Indian Ocean Territory'),
       (32, 'BN', 'BRN', 'BRUNEI DARUSSALAM', 'Brunei Darussalam'),
       (33, 'BG', 'BGR', 'BULGARIA', 'Bulgaria'),
       (34, 'BF', 'BFA', 'BURKINA FASO', 'Burkina Faso'),
       (35, 'BI', 'BDI', 'BURUNDI', 'Burundi'),
       (36, 'KH', 'KHM', 'CAMBODIA', 'Cambodia'),
       (37, 'CM', 'CMR', 'CAMEROON', 'Cameroon'),
       (38, 'CA', 'CAN', 'CANADA', 'Canada'),
       (39, 'CV', 'CPV', 'CAPE VERDE', 'Cape Verde'),
       (40, 'KY', 'CYM', 'CAYMAN ISLANDS', 'Cayman Islands'),
       (41, 'CF', 'CAF', 'CENTRAL AFRICAN REPUBLIC', 'Central African Republic'),
       (42, 'TD', 'TCD', 'CHAD', 'Chad'),
       (43, 'CL', 'CHL', 'CHILE', 'Chile'),
       (44, 'CN', 'CHN', 'CHINA', 'China'),
       (45, 'CX', null, 'CHRISTMAS ISLAND', 'Christmas Island'),
       (46, 'CC', null, 'COCOS (KEELING) ISLANDS', 'Cocos (Keeling) Islands'),
       (47, 'CO', 'COL', 'COLOMBIA', 'Colombia'),
       (48, 'KM', 'COM', 'COMOROS', 'Comoros'),
       (49, 'CG', 'COG', 'CONGO', 'Congo'),
       (50, 'CD', 'COD', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'Congo, the Democratic Republic of the'),
       (51, 'CK', 'COK', 'COOK ISLANDS', 'Cook Islands'),
       (52, 'CR', 'CRI', 'COSTA RICA', 'Costa Rica'),
       (53, 'CI', 'CIV', 'COTE D''IVOIRE', 'Cote D''Ivoire'),
       (54, 'HR', 'HRV', 'CROATIA', 'Croatia'),
       (55, 'CU', 'CUB', 'CUBA', 'Cuba'),
       (56, 'CY', 'CYP', 'CYPRUS', 'Cyprus'),
       (57, 'CZ', 'CZE', 'CZECH REPUBLIC', 'Czech Republic'),
       (58, 'DK', 'DNK', 'DENMARK', 'Denmark'),
       (59, 'DJ', 'DJI', 'DJIBOUTI', 'Djibouti'),
       (60, 'DM', 'DMA', 'DOMINICA', 'Dominica'),
       (61, 'DO', 'DOM', 'DOMINICAN REPUBLIC', 'Dominican Republic'),
       (62, 'EC', 'ECU', 'ECUADOR', 'Ecuador'),
       (63, 'EG', 'EGY', 'EGYPT', 'Egypt'),
       (64, 'SV', 'SLV', 'EL SALVADOR', 'El Salvador'),
       (65, 'GQ', 'GNQ', 'EQUATORIAL GUINEA', 'Equatorial Guinea'),
       (66, 'ER', 'ERI', 'ERITREA', 'Eritrea'),
       (67, 'EE', 'EST', 'ESTONIA', 'Estonia'),
       (68, 'ET', 'ETH', 'ETHIOPIA', 'Ethiopia'),
       (69, 'FK', 'FLK', 'FALKLAND ISLANDS (MALVINAS)', 'Falkland Islands (Malvinas)'),
       (70, 'FO', 'FRO', 'FAROE ISLANDS', 'Faroe Islands'),
       (71, 'FJ', 'FJI', 'FIJI', 'Fiji'),
       (72, 'FI', 'FIN', 'FINLAND', 'Finland'),
       (73, 'FR', 'FRA', 'FRANCE', 'France'),
       (74, 'GF', 'GUF', 'FRENCH GUIANA', 'French Guiana'),
       (75, 'PF', 'PYF', 'FRENCH POLYNESIA', 'French Polynesia'),
       (76, 'TF', null, 'FRENCH SOUTHERN TERRITORIES', 'French Southern Territories'),
       (77, 'GA', 'GAB', 'GABON', 'Gabon'),
       (78, 'GM', 'GMB', 'GAMBIA', 'Gambia'),
       (79, 'GE', 'GEO', 'GEORGIA', 'Georgia'),
       (80, 'DE', 'DEU', 'GERMANY', 'Germany'),
       (81, 'GH', 'GHA', 'GHANA', 'Ghana'),
       (82, 'GI', 'GIB', 'GIBRALTAR', 'Gibraltar'),
       (83, 'GR', 'GRC', 'GREECE', 'Greece'),
       (84, 'GL', 'GRL', 'GREENLAND', 'Greenland'),
       (85, 'GD', 'GRD', 'GRENADA', 'Grenada'),
       (86, 'GP', 'GLP', 'GUADELOUPE', 'Guadeloupe'),
       (87, 'GU', 'GUM', 'GUAM', 'Guam'),
       (88, 'GT', 'GTM', 'GUATEMALA', 'Guatemala'),
       (89, 'GN', 'GIN', 'GUINEA', 'Guinea'),
       (90, 'GW', 'GNB', 'GUINEA-BISSAU', 'Guinea-Bissau'),
       (91, 'GY', 'GUY', 'GUYANA', 'Guyana'),
       (92, 'HT', 'HTI', 'HAITI', 'Haiti'),
       (93, 'HM', null, 'HEARD ISLAND AND MCDONALD ISLANDS', 'Heard Island and Mcdonald Islands'),
       (94, 'VA', 'VAT', 'HOLY SEE (VATICAN CITY STATE)', 'Holy See (Vatican City State)'),
       (95, 'HN', 'HND', 'HONDURAS', 'Honduras'),
       (96, 'HK', 'HKG', 'HONG KONG', 'Hong Kong'),
       (97, 'HU', 'HUN', 'HUNGARY', 'Hungary'),
       (98, 'IS', 'ISL', 'ICELAND', 'Iceland'),
       (99, 'IN', 'IND', 'INDIA', 'India'),
       (100, 'ID', 'IDN', 'INDONESIA', 'Indonesia'),
       (101, 'IR', 'IRN', 'IRAN, ISLAMIC REPUBLIC OF', 'Iran, Islamic Republic of'),
       (102, 'IQ', 'IRQ', 'IRAQ', 'Iraq'),
       (103, 'IE', 'IRL', 'IRELAND', 'Ireland'),
       (104, 'IL', 'ISR', 'ISRAEL', 'Israel'),
       (105, 'IT', 'ITA', 'ITALY', 'Italy'),
       (106, 'JM', 'JAM', 'JAMAICA', 'Jamaica'),
       (107, 'JP', 'JPN', 'JAPAN', 'Japan'),
       (108, 'JO', 'JOR', 'JORDAN', 'Jordan'),
       (109, 'KZ', 'KAZ', 'KAZAKHSTAN', 'Kazakhstan'),
       (110, 'KE', 'KEN', 'KENYA', 'Kenya'),
       (111, 'KI', 'KIR', 'KIRIBATI', 'Kiribati'),
       (112, 'KP', 'PRK', 'KOREA, DEMOCRATIC PEOPLE''S REPUBLIC OF', 'Korea, Democratic People''s Republic of'),
       (113, 'KR', 'KOR', 'KOREA, REPUBLIC OF', 'Korea, Republic of'),
       (114, 'KW', 'KWT', 'KUWAIT', 'Kuwait'),
       (115, 'KG', 'KGZ', 'KYRGYZSTAN', 'Kyrgyzstan'),
       (116, 'LA', 'LAO', 'LAO PEOPLE''S DEMOCRATIC REPUBLIC', 'Lao People''s Democratic Republic'),
       (117, 'LV', 'LVA', 'LATVIA', 'Latvia'),
       (118, 'LB', 'LBN', 'LEBANON', 'Lebanon'),
       (119, 'LS', 'LSO', 'LESOTHO', 'Lesotho'),
       (120, 'LR', 'LBR', 'LIBERIA', 'Liberia'),
       (121, 'LY', 'LBY', 'LIBYAN ARAB JAMAHIRIYA', 'Libyan Arab Jamahiriya'),
       (122, 'LI', 'LIE', 'LIECHTENSTEIN', 'Liechtenstein'),
       (123, 'LT', 'LTU', 'LITHUANIA', 'Lithuania'),
       (124, 'LU', 'LUX', 'LUXEMBOURG', 'Luxembourg'),
       (125, 'MO', 'MAC', 'MACAO', 'Macao'),
       (126, 'MK', 'MKD', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'Macedonia, the Former Yugoslav Republic of'),
       (127, 'MG', 'MDG', 'MADAGASCAR', 'Madagascar'),
       (128, 'MW', 'MWI', 'MALAWI', 'Malawi'),
       (129, 'MY', 'MYS', 'MALAYSIA', 'Malaysia'),
       (130, 'MV', 'MDV', 'MALDIVES', 'Maldives'),
       (131, 'ML', 'MLI', 'MALI', 'Mali'),
       (132, 'MT', 'MLT', 'MALTA', 'Malta'),
       (133, 'MH', 'MHL', 'MARSHALL ISLANDS', 'Marshall Islands'),
       (134, 'MQ', 'MTQ', 'MARTINIQUE', 'Martinique'),
       (135, 'MR', 'MRT', 'MAURITANIA', 'Mauritania'),
       (136, 'MU', 'MUS', 'MAURITIUS', 'Mauritius'),
       (137, 'YT', null, 'MAYOTTE', 'Mayotte'),
       (138, 'MX', 'MEX', 'MEXICO', 'Mexico'),
       (139, 'FM', 'FSM', 'MICRONESIA, FEDERATED STATES OF', 'Micronesia, Federated States of'),
       (140, 'MD', 'MDA', 'MOLDOVA, REPUBLIC OF', 'Moldova, Republic of'),
       (141, 'MC', 'MCO', 'MONACO', 'Monaco'),
       (142, 'MN', 'MNG', 'MONGOLIA', 'Mongolia'),
       (143, 'MS', 'MSR', 'MONTSERRAT', 'Montserrat'),
       (144, 'MA', 'MAR', 'MOROCCO', 'Morocco'),
       (145, 'MZ', 'MOZ', 'MOZAMBIQUE', 'Mozambique'),
       (146, 'MM', 'MMR', 'MYANMAR', 'Myanmar'),
       (147, 'NA', 'NAM', 'NAMIBIA', 'Namibia'),
       (148, 'NR', 'NRU', 'NAURU', 'Nauru'),
       (149, 'NP', 'NPL', 'NEPAL', 'Nepal'),
       (150, 'NL', 'NLD', 'NETHERLANDS', 'Netherlands'),
       (151, 'AN', 'ANT', 'NETHERLANDS ANTILLES', 'Netherlands Antilles'),
       (152, 'NC', 'NCL', 'NEW CALEDONIA', 'New Caledonia'),
       (153, 'NZ', 'NZL', 'NEW ZEALAND', 'New Zealand'),
       (154, 'NI', 'NIC', 'NICARAGUA', 'Nicaragua'),
       (155, 'NE', 'NER', 'NIGER', 'Niger'),
       (156, 'NG', 'NGA', 'NIGERIA', 'Nigeria'),
       (157, 'NU', 'NIU', 'NIUE', 'Niue'),
       (158, 'NF', 'NFK', 'NORFOLK ISLAND', 'Norfolk Island'),
       (159, 'MP', 'MNP', 'NORTHERN MARIANA ISLANDS', 'Northern Mariana Islands'),
       (160, 'NO', 'NOR', 'NORWAY', 'Norway'),
       (161, 'OM', 'OMN', 'OMAN', 'Oman'),
       (162, 'PK', 'PAK', 'PAKISTAN', 'Pakistan'),
       (163, 'PW', 'PLW', 'PALAU', 'Palau'),
       (164, 'PS', null, 'PALESTINIAN TERRITORY, OCCUPIED', 'Palestinian Territory, Occupied'),
       (165, 'PA', 'PAN', 'PANAMA', 'Panama'),
       (166, 'PG', 'PNG', 'PAPUA NEW GUINEA', 'Papua New Guinea'),
       (167, 'PY', 'PRY', 'PARAGUAY', 'Paraguay'),
       (168, 'PE', 'PER', 'PERU', 'Peru'),
       (169, 'PH', 'PHL', 'PHILIPPINES', 'Philippines'),
       (170, 'PN', 'PCN', 'PITCAIRN', 'Pitcairn'),
       (171, 'PL', 'POL', 'POLAND', 'Poland'),
       (172, 'PT', 'PRT', 'PORTUGAL', 'Portugal'),
       (173, 'PR', 'PRI', 'PUERTO RICO', 'Puerto Rico'),
       (174, 'QA', 'QAT', 'QATAR', 'Qatar'),
       (175, 'RE', 'REU', 'REUNION', 'Reunion'),
       (176, 'RO', 'ROM', 'ROMANIA', 'Romania'),
       (177, 'RU', 'RUS', 'RUSSIAN FEDERATION', 'Russian Federation'),
       (178, 'RW', 'RWA', 'RWANDA', 'Rwanda'),
       (179, 'SH', 'SHN', 'SAINT HELENA', 'Saint Helena'),
       (180, 'KN', 'KNA', 'SAINT KITTS AND NEVIS', 'Saint Kitts and Nevis'),
       (181, 'LC', 'LCA', 'SAINT LUCIA', 'Saint Lucia'),
       (182, 'PM', 'SPM', 'SAINT PIERRE AND MIQUELON', 'Saint Pierre and Miquelon'),
       (183, 'VC', 'VCT', 'SAINT VINCENT AND THE GRENADINES', 'Saint Vincent and the Grenadines'),
       (184, 'WS', 'WSM', 'SAMOA', 'Samoa'),
       (185, 'SM', 'SMR', 'SAN MARINO', 'San Marino'),
       (186, 'ST', 'STP', 'SAO TOME AND PRINCIPE', 'Sao Tome and Principe'),
       (187, 'SA', 'SAU', 'SAUDI ARABIA', 'Saudi Arabia'),
       (188, 'SN', 'SEN', 'SENEGAL', 'Senegal'),
       (189, 'CS', null, 'SERBIA AND MONTENEGRO', 'Serbia and Montenegro'),
       (190, 'SC', 'SYC', 'SEYCHELLES', 'Seychelles'),
       (191, 'SL', 'SLE', 'SIERRA LEONE', 'Sierra Leone'),
       (192, 'SG', 'SGP', 'SINGAPORE', 'Singapore'),
       (193, 'SK', 'SVK', 'SLOVAKIA', 'Slovakia'),
       (194, 'SI', 'SVN', 'SLOVENIA', 'Slovenia'),
       (195, 'SB', 'SLB', 'SOLOMON ISLANDS', 'Solomon Islands'),
       (196, 'SO', 'SOM', 'SOMALIA', 'Somalia'),
       (197, 'ZA', 'ZAF', 'SOUTH AFRICA', 'South Africa'),
       (198, 'GS', null, 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
        'South Georgia and the South Sandwich Islands'),
       (199, 'ES', 'ESP', 'SPAIN', 'Spain'),
       (200, 'LK', 'LKA', 'SRI LANKA', 'Sri Lanka'),
       (201, 'SD', 'SDN', 'SUDAN', 'Sudan'),
       (202, 'SR', 'SUR', 'SURINAME', 'Suriname'),
       (203, 'SJ', 'SJM', 'SVALBARD AND JAN MAYEN', 'Svalbard and Jan Mayen'),
       (204, 'SZ', 'SWZ', 'SWAZILAND', 'Swaziland'),
       (205, 'SE', 'SWE', 'SWEDEN', 'Sweden'),
       (206, 'CH', 'CHE', 'SWITZERLAND', 'Switzerland'),
       (207, 'SY', 'SYR', 'SYRIAN ARAB REPUBLIC', 'Syrian Arab Republic'),
       (208, 'TW', 'TWN', 'TAIWAN, PROVINCE OF CHINA', 'Taiwan, Province of China'),
       (209, 'TJ', 'TJK', 'TAJIKISTAN', 'Tajikistan'),
       (210, 'TZ', 'TZA', 'TANZANIA, UNITED REPUBLIC OF', 'Tanzania, United Republic of'),
       (211, 'TH', 'THA', 'THAILAND', 'Thailand'),
       (212, 'TL', null, 'TIMOR-LESTE', 'Timor-Leste'),
       (213, 'TG', 'TGO', 'TOGO', 'Togo'),
       (214, 'TK', 'TKL', 'TOKELAU', 'Tokelau'),
       (215, 'TO', 'TON', 'TONGA', 'Tonga'),
       (216, 'TT', 'TTO', 'TRINIDAD AND TOBAGO', 'Trinidad and Tobago'),
       (217, 'TN', 'TUN', 'TUNISIA', 'Tunisia'),
       (218, 'TR', 'TUR', 'TURKEY', 'Turkey'),
       (219, 'TM', 'TKM', 'TURKMENISTAN', 'Turkmenistan'),
       (220, 'TC', 'TCA', 'TURKS AND CAICOS ISLANDS', 'Turks and Caicos Islands'),
       (221, 'TV', 'TUV', 'TUVALU', 'Tuvalu'),
       (222, 'UG', 'UGA', 'UGANDA', 'Uganda'),
       (223, 'UA', 'UKR', 'UKRAINE', 'Ukraine'),
       (224, 'AE', 'ARE', 'UNITED ARAB EMIRATES', 'United Arab Emirates'),
       (225, 'GB', 'GBR', 'UNITED KINGDOM', 'United Kingdom'),
       (226, 'US', 'USA', 'UNITED STATES', 'United States'),
       (227, 'UM', null, 'UNITED STATES MINOR OUTLYING ISLANDS', 'United States Minor Outlying Islands'),
       (228, 'UY', 'URY', 'URUGUAY', 'Uruguay'),
       (229, 'UZ', 'UZB', 'UZBEKISTAN', 'Uzbekistan'),
       (230, 'VU', 'VUT', 'VANUATU', 'Vanuatu'),
       (231, 'VE', 'VEN', 'VENEZUELA', 'Venezuela'),
       (232, 'VN', 'VNM', 'VIET NAM', 'Viet Nam'),
       (233, 'VG', 'VGB', 'VIRGIN ISLANDS, BRITISH', 'Virgin Islands, British'),
       (234, 'VI', 'VIR', 'VIRGIN ISLANDS, U.S.', 'Virgin Islands, U.s.'),
       (235, 'WF', 'WLF', 'WALLIS AND FUTUNA', 'Wallis and Futuna'),
       (236, 'EH', 'ESH', 'WESTERN SAHARA', 'Western Sahara'),
       (237, 'YE', 'YEM', 'YEMEN', 'Yemen'),
       (238, 'ZM', 'ZMB', 'ZAMBIA', 'Zambia'),
       (239, 'ZW', 'ZWE', 'ZIMBABWE', 'Zimbabwe');