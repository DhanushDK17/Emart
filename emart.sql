-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2020 at 11:34 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emart`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill_details_table`
--

CREATE TABLE `bill_details_table` (
  `bill_details_id` int(11) NOT NULL,
  `bill_id` int(20) NOT NULL,
  `item_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill_details_table`
--

INSERT INTO `bill_details_table` (`bill_details_id`, `bill_id`, `item_id`) VALUES
(764, 653, 501),
(765, 654, 501),
(766, 655, 502),
(767, 656, 501),
(768, 657, 503),
(769, 658, 502),
(770, 659, 204),
(771, 660, 204),
(772, 661, 508),
(773, 662, 509),
(774, 663, 204),
(775, 664, 204),
(776, 665, 501),
(777, 665, 204),
(778, 665, 508),
(779, 665, 504),
(780, 665, 506),
(781, 665, 503),
(782, 665, 509),
(783, 665, 505),
(784, 665, 502),
(785, 665, 507),
(786, 666, 204),
(787, 667, 204),
(788, 668, 508),
(789, 669, 502),
(790, 669, 501),
(791, 670, 505),
(792, 670, 204),
(793, 671, 502),
(794, 672, 504);

-- --------------------------------------------------------

--
-- Table structure for table `bill_table`
--

CREATE TABLE `bill_table` (
  `bill_id` int(20) NOT NULL,
  `buyer_id` int(20) NOT NULL,
  `bill_type` varchar(20) NOT NULL,
  `bill_date` date NOT NULL,
  `bill_remarks` varchar(20) NOT NULL,
  `bill_amount` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill_table`
--

INSERT INTO `bill_table` (`bill_id`, `buyer_id`, `bill_type`, `bill_date`, `bill_remarks`, `bill_amount`) VALUES
(653, 202, 'credit', '2020-03-10', '', 80000),
(654, 202, 'credit', '2020-03-10', '', 80000),
(655, 202, 'credit', '2020-03-10', '', 100),
(656, 202, 'credit', '2020-03-10', '', 80000),
(657, 202, 'credit', '2020-03-10', '', 35000),
(658, 202, 'credit', '2020-03-10', '', 100),
(659, 205, 'credit', '2020-03-11', '', 1000),
(660, 205, 'credit', '2020-03-11', '', 1000),
(661, 202, 'credit', '2020-03-11', '', 500),
(662, 202, 'credit', '2020-03-11', '', 2000),
(663, 205, 'credit', '2020-03-11', '', 1000),
(664, 205, 'credit', '2020-03-11', '', 1000),
(665, 205, 'credit', '2020-03-11', '', 269500),
(666, 202, 'credit', '2020-03-11', '', 1000),
(667, 202, 'credit', '2020-03-11', '', 1000),
(668, 202, 'credit', '2020-03-11', '', 500),
(669, 202, 'credit', '2020-03-12', '', 80100),
(670, 202, 'credit', '2020-03-12', '', 11000),
(671, 202, 'credit', '2020-03-13', '', 100),
(672, 205, 'credit', '2020-03-13', '', 60000);

-- --------------------------------------------------------

--
-- Table structure for table `buyer_signup_table`
--

CREATE TABLE `buyer_signup_table` (
  `buyer_id` int(30) NOT NULL,
  `buyer_username` varchar(30) NOT NULL,
  `buyer_email` varchar(30) NOT NULL,
  `buyer_mobile` bigint(30) NOT NULL,
  `buyer_date` date NOT NULL,
  `buyer_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyer_signup_table`
--

INSERT INTO `buyer_signup_table` (`buyer_id`, `buyer_username`, `buyer_email`, `buyer_mobile`, `buyer_date`, `buyer_password`) VALUES
(201, 'sravya', 'sravya@gmail.com', 987456321, '2020-02-04', '123'),
(202, 'sindhu', 'sindhu@gmail.com', 986547312, '2020-02-03', '456'),
(203, '', '', 12345, '2020-01-09', ''),
(204, 'a', '2', 2, '2020-03-03', '1'),
(205, 'prudhvi', 'info', 123, '2020-03-23', '123'),
(206, 'rajesha', '123', 123, '2020-03-04', '123');

-- --------------------------------------------------------

--
-- Table structure for table `category_table`
--

CREATE TABLE `category_table` (
  `category_id` int(20) NOT NULL,
  `category_name` varchar(20) NOT NULL,
  `category_brief` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_table`
--

INSERT INTO `category_table` (`category_id`, `category_name`, `category_brief`) VALUES
(301, 'footwear', 'for foot'),
(302, 'electronic appliance', 'tv'),
(303, 'mobiles', 'electronic devices');

-- --------------------------------------------------------

--
-- Table structure for table `item_table`
--

CREATE TABLE `item_table` (
  `item_id` int(20) NOT NULL,
  `item_name` varchar(20) NOT NULL,
  `item_image` varchar(200) NOT NULL,
  `item_price` int(20) NOT NULL,
  `item_stock` int(20) NOT NULL,
  `item_description` varchar(200) NOT NULL,
  `subcategory_id` int(20) NOT NULL,
  `item_remarks` varchar(20) NOT NULL,
  `seller_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_table`
--

INSERT INTO `item_table` (`item_id`, `item_name`, `item_image`, `item_price`, `item_stock`, `item_description`, `subcategory_id`, `item_remarks`, `seller_id`) VALUES
(204, 'Shoes', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', 1000, 5, '', 401, 'very good ', 102),
(501, 'sony', 'https://5.imimg.com/data5/RT/DE/RQ/SELLER-65447592/sony-bravia-led-tv-500x500.jpg', 80000, 20, '4K for everyone with best in class picture quality and Dolby + DTS HD audio for complete cinematic experience, comes with supporting applications like Netflix, Prime Video, Hotstar.', 402, 'good', 101),
(502, 'bata', 'https://assets.charmboard.com/images/w_1920,h_1080/x_383,y_397,w_971,h_549,c_crop,f_auto,q_auto,e_sharpen/h_541/im/lc/859214/bata-in-sushant-kriti-x-bata-bata-india-2018.jpg', 100, 10, 'Experience great comfort walking in this pair of Black Casual Shoes from the house of BATA Featuring a contemporary refined design with exceptional comfort', 401, 'average', 102),
(503, 'OnePlus 7', 'https://fdn.gsmarena.com/imgroot/reviews/19/oneplus-7/lifestyle/-727w2/gsmarena_006.jpg', 35000, 3, 'OnePlus 7 smartphone has a Optic AMOLED display. It measures 157.7 mm x 74.8 mm x 8.2 mm and weighs 182 grams. The screen has a resolution of 1080 x 2340 pixels and 402 ppi pixel density. ', 403, 'very good ', 102),
(504, 'Mac Os', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 60000, 3, '', 404, 'very good ', 102),
(505, 'Samsung', 'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80', 10000, 2, '', 404, 'very good ', 101),
(506, 'Sony', 'https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80', 80000, 3, '', 402, 'very good ', 101),
(507, 'Lenovo ', 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80', 900, 5, 'Mouse', 404, 'very good ', 102),
(508, 'KeyBoard', 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80', 500, 10, 'Intel keyboards', 404, 'very good ', 101),
(509, 'Casuals', 'https://images.unsplash.com/photo-1534233650908-b471f2350922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80', 2000, 10, 'comfort', 401, 'very good ', 101);

-- --------------------------------------------------------

--
-- Table structure for table `seller_signup_table`
--

CREATE TABLE `seller_signup_table` (
  `seller_id` int(30) NOT NULL,
  `seller_username` varchar(30) NOT NULL,
  `seller_password` varchar(30) NOT NULL,
  `seller_company` varchar(30) NOT NULL,
  `seller_brief` varchar(30) NOT NULL,
  `seller_gst` int(30) NOT NULL,
  `seller_address` varchar(30) NOT NULL,
  `seller_email` varchar(30) NOT NULL,
  `seller_contact` int(30) NOT NULL,
  `seller_website` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller_signup_table`
--

INSERT INTO `seller_signup_table` (`seller_id`, `seller_username`, `seller_password`, `seller_company`, `seller_brief`, `seller_gst`, `seller_address`, `seller_email`, `seller_contact`, `seller_website`) VALUES
(101, 'sindhu', '123', 'Cts', 'Very Good', 100, 'hyderabad', 'abc@gmail.com', 1232456788, 'www.abc.com'),
(102, 'prudhvi', '123', 'cts', 'Good coder', 147, 'hyderabad', 'pro@gmail.com', 125478963, 'www.prudhvi.com');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category_table`
--

CREATE TABLE `sub_category_table` (
  `subcategory_id` int(20) NOT NULL,
  `subcategory_name` varchar(20) NOT NULL,
  `category_id` int(20) NOT NULL,
  `subcategory_brief` varchar(20) NOT NULL,
  `subcategory_gst` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_category_table`
--

INSERT INTO `sub_category_table` (`subcategory_id`, `subcategory_name`, `category_id`, `subcategory_brief`, `subcategory_gst`) VALUES
(401, 'sandals', 301, 'for foott', 125),
(402, 'tv', 302, 'watch tv', 147),
(403, 'one plus', 303, '64gb', 10),
(404, 'Devices', 302, 'laptops', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill_details_table`
--
ALTER TABLE `bill_details_table`
  ADD PRIMARY KEY (`bill_details_id`),
  ADD KEY `bill_id` (`bill_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `bill_table`
--
ALTER TABLE `bill_table`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Indexes for table `buyer_signup_table`
--
ALTER TABLE `buyer_signup_table`
  ADD PRIMARY KEY (`buyer_id`);

--
-- Indexes for table `category_table`
--
ALTER TABLE `category_table`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `item_table`
--
ALTER TABLE `item_table`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `subcategory_id` (`subcategory_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indexes for table `seller_signup_table`
--
ALTER TABLE `seller_signup_table`
  ADD PRIMARY KEY (`seller_id`);

--
-- Indexes for table `sub_category_table`
--
ALTER TABLE `sub_category_table`
  ADD PRIMARY KEY (`subcategory_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill_details_table`
--
ALTER TABLE `bill_details_table`
  MODIFY `bill_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=795;

--
-- AUTO_INCREMENT for table `bill_table`
--
ALTER TABLE `bill_table`
  MODIFY `bill_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=673;

--
-- AUTO_INCREMENT for table `buyer_signup_table`
--
ALTER TABLE `buyer_signup_table`
  MODIFY `buyer_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill_details_table`
--
ALTER TABLE `bill_details_table`
  ADD CONSTRAINT `bill_details_table_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill_table` (`bill_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bill_details_table_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item_table` (`item_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bill_table`
--
ALTER TABLE `bill_table`
  ADD CONSTRAINT `bill_table_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyer_signup_table` (`buyer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `item_table`
--
ALTER TABLE `item_table`
  ADD CONSTRAINT `item_table_ibfk_1` FOREIGN KEY (`subcategory_id`) REFERENCES `sub_category_table` (`subcategory_id`),
  ADD CONSTRAINT `item_table_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `seller_signup_table` (`seller_id`);

--
-- Constraints for table `sub_category_table`
--
ALTER TABLE `sub_category_table`
  ADD CONSTRAINT `sub_category_table_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category_table` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
