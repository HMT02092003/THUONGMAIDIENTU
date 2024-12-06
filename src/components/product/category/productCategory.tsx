'use client';
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag } from "antd";

const { Title, Paragraph, Text } = Typography;

interface Laptop {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  imageUrl: string;
  tags: string[]; // Mảng chứa các tag khác
}

// Dữ liệu giả lập với 22 sản phẩm (2 sản phẩm cũ + 20 sản phẩm mới)
const fakeData: Laptop[] = [
  {
    id: 1,
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    price: "26.990.000",
    category: "Ultrabook",
    brand: "Lenovo",
    imageUrl: "data:image/jpeg;base64,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",
    tags: ["Core i7", "16GB RAM", "SSD 512GB"],
  },
  {
    id: 2,
    name: "Dell Inspiron 15 5630",
    price: "15.990.000",
    category: "Laptop phổ thông",
    brand: "Dell",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhMVEhUXFxgWFhUYFhAVFRgXFxUXFxcXFhcZHSggGBolGxcVITEhJSktLi4uFyAzODMsNygtLi4BCgoKDg0OGhAQGzAmICUtLS4yLy4tLS01LTUtLS0uKy8tLS8tLy0vLS8tLS0tLjAvLS0tLS8tKy0tMi0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABAEAABAwIDBAYHBgUEAwEAAAABAAIRAyEEEjEFQVFhBhMicYGRBzJCYqGx0RRScsHw8SMzkqLhQ1NjghU04gj/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEBQIG/8QAKBEBAAIBBQAABAcBAAAAAAAAAAECAwQREiExQVFhgQUTIjJxkdFS/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAvFWoGtLjYAEk8gJK9qp+lPan2fZmJcDDnt6ph35qhyyPMlBybDelDaVKvVxIIr4apUcW0njstZmIYGuAzUzli9xyXVeiPpGwWPhgd1FY/6NSASf+N3q1PC/EBcJptikaYFssE8CIGngofqA7ThPKy9cXjk+vkXz90R9IO0cHSa6oDi8KDlOd0vpxFhVEltiDD5BkQQuv8ARbprg8eB1NTLUiTRfDao42mHDm0kLzs9RO6xIiIkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFyD0+bT/9TDA+06s7hDey2fFxPguvr5w9J+0xX2nifusDaDTu7MOd4y4+SmI3lFp2hEYDECoLgkjXQW32Ou5aldhY6Rdsnxb+0LFUw7msFRpgyeFxOojXuXljs8k6xMc4P7r3HyUz12tvo1xOSu6g71arLA/fpgmI5tL5/CFYtrdCKVQ56B+z1AZBbOSeMC7DzbHcVSMDX+z1MPiQPUe3Nwy6EDnlzDxXa3U/LcVox8bV4yzZeVLcqqlszpxtHZxFPH0ziaOgqgjP4VNH9z4dzXS+j/STC41ubD1Q4j1mHs1G/iYbjv0O4qvVKAcCHAOBsQQCCOBG9VbaXQtuYVcI84eq27YLg2fdI7TPCRyVd8H/ACtx6qJ6s7Ci5Xsz0gYrBubS2lSL2yAKzQMx3Tbs1PCCN4K6Nsja9DFM6yhUbUbvjVp4OabtPIhUTG3rVExPcN5ERQkREQEREBERAREQEREBERAREQEREBERAREQEREGttPFto0atVxgMY55PJoJXzDQb1zXGoO1Vc6qdbOe7Nr4rtnpo2p1GzKrZg1nNpDmDd/9jXLh2FxIIBG4Af4+S9V9eL+PeHo2LDcjj8wvDcK0jO0w6e0N0ETPzW/iMPnbnabjXjHFYMAS6pTA7Lpaw6QRcT8Bcr3EdqrT03qrGvouG+I+is2zdu1HUqEVOpdlhziP4b3UxFwATngAGx+SrmPwL8O8hrs0Akgb2ybjhKw4DHEU3sBOQuzRxtAn4+ZUxWPDl5LpWxNvuqlrKjWsM5TZwPqui8kEkgaayrF1a5hs7FtdWouZ/DGenFyQIcIv8L7ir30e2sazurcQ4hmeQI3gG24dpu5Titw/TO87z/SM9IyfrjaNoj7/AMN7EYVr2lr2hzTq1wBB7wVWcT0SdSf12BquoVB7OYx3B1zHuukHkrqaa8Gmr7RW3rLWbUnpBbJ6f1aThR2jSLHf7rW68ywajmye4K+4LGU6zBUpPbUYdHNII/fkqrjMGyo3JUaHt4ET4jgeYVddsCvhnmrgarmHfTJ15SbP7njxWe2GY8aqaiJ6t06mipGxunozdVjaZoPGrwHZO8t1aOdxzCulGs17Q5jg5puHAggjiCNVS0vaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDiHp/wBp5q+GwoNmMNRw955ys8g1/muT5Xsg7jcHcY/NWjp1tD7XtLF1PWbnNNs/dpdi19CQT4qFABbkyQPxb+UiymMc28VXyVr63dh412Yl26LfkpvAObTfDAGnNmzaktJtE6CLWVewjQySAR3u+gW9Rc60SCDa4tOt4+CvjFfjtszWzUifVyxTTWo5wO2BcalzZBc3vsf0VXNqNpueX0yO0AHDTtQfofgpvZeOgXsoPpDgnSalOMpuY3OGpjgdf2UxSaz2TlraOm9s7DGmGVi5sZhlbLQSQ/KJnd6x/wCp0W+ypXw9Z5bmDqOdhIBy5C++bkTl39xssXQdzalNzHhryypnDXcIbY8sw+fFSWJwuV1Zrp7YDwSOLpgTvn58yotCyllv2L0jp1WMLy1toJJOsA2m8XIvvCmjUZrmGseK5Xs3rGNeW5sg9aCBHajxF9Atx223PIFQy3fBPdJBNzp9VltOem/HuGytNPk25ztLpBbIlY3MUNs/bOZjA0iALGQTA3O4WgXUxhsSyoLOaSNQDp/jmrMOsreePkqM+hvjjl7H0aG0MAyqMtRocN3EdxFx4KFo4XE4NxfhKhLZk0zF+8eq7v7J5lWupTWhj3Cmx7zo1pce5oJ/Japito7Y4m9J6T/Rja5xVAVXMyEOcwi8EtsSJuL2g6EEKWUN0OwhpYLDtd6xYHu/FU7bvi4qZWN0RERAREQEREBERAREQEREBERAREQFF9KNpjC4TE4g/wCnTe4cyGmB5wpRc39OW0cuDpYcG9eq0Ee4ztuPmGjxQck2VspuVr6kucYLjm3m53W1U9h9iYYgnLzMPd85geMLTwdxZoFuMHuA4RxUjiKhZTmIJETBFpg3stFZ4+Mdq8/WrtXo7TDC+iSCNWOcD4C35lRTCGgTc7+9SxrQ1+UzDZk5N4JNib/NQVYCbWHmt2C+87S5+oxdbw3vtTiDEAea1xRfUNiXHh+tEpYZ0AnQ6c+fzUhs2WPBjkRrY2PzWvhv6wTbh4n9i7BDQ1xe4VBYPadCdROjhyNlFbaq1mVX5qziW2uMojdZoykd6mamJysZRY4ipUrOe5oA7IJy02Tx3+IUftykMhpsMljiJ1kj1u8bvBY8uCZiePrTh1URMRaen5gulFAQK1N5tldEFpE3GUxaYNtCLLJtHaWAquDqb3UZPaYWPLRzaWzbkVSa+t+yfhYz4ePmtZ5jWy485M1J2s7deF43h0Wjj6TGNfSxNMkC7XOeHZg50ENdEAtg8LnepWt0hw0DMchABu5sTE2c2JEGy5IK8R4rzWqATZUZOOT91e/nDViz5MXVZ6+TprfSRRw7HU6VN2IMktJ/hsHIkjMeOniojDdLMftDEUsM5zKdOs8U3MpsbdjjcFzpdpvBCpJxEGNP2V69DGH6/aIcRaixz+UkZR4yVbivMRFI8V5J/Mvzl9AtbAAGgX6iK1IiIgIiICIiAiIgIiICIiAiIgIiIC4T6Ydo9btNlIQW4elfk+qZM/8AUN813R7oBJ3CV8nbY28K+MxVcmRUrOcD7gMM/tAUx6828TOFeZ4fBb2KxzW0XU4ILnAh1j7QzDSeJ1KruGxQdo6d9t3eDvWWuOzmJkZ28zF4kW4aWVsM87x036uIDhF4yiRYmJAve24zyUt0d2PTxJqOc4N6sSAdCTP0Hmqu4hoAbY6kSbncT+tymNk4003DJBOSCOJmVfitteN52ZtRS35U8Y3n6pJ+FczLNN0hxvqLCQPgStzYuy3ve5+Uw06/8hEt8tT3c1u7J6StyZKrWgvAgOsMx0ynf3KX2bjxTAaNPz4roVnLflx22+E/7Dh5L4MXD8yJi3xj4fafjuitl9F61R7yCGimYzmTmdMyO6ymMP0DiHVHE7yBxuSe6w81OYDaTYAFlMUMaCseotqPInZ0dHOjnua7/wAy470x6HvpnrGNgOmReJ1twCouIoua403CLxFrHiCf0V9MbTwgqssO0DI8iqX006GdfhnOaGiqBnaYglzRGUnfIm3GOC5t9Rb9uSu/1dqmlxz+vFbb6OJYnDvpnK9rmnUSHAkHhK8kExyhSm1DlAp1CWvp9h1M3IIPaykaTw3QohtT6/FU2jbxMPVQ37/0V2b/APPWzoo4rEH2nim0/hHaHnlXE6zyDfd+6+mvRPs7qNmYYH1ng1Hcy42P9IavWOHqFvREVqRERAREQEREBERAREQEREBERAREQRfSijWfhMQzDx1rqbmsuBBcIzXtaZ8FxrbXRujTw2Gp1qDaFeHNbRyRakxpqZantuJLqgdMuDyPZhd5UZt/ZQxFKIZ1rJfQe9ucU6waQx8ciUHzJjejwguokyLhpIPkToe9RdStWZDX5hcGHDeOBOq6DtjZdSjlNRrWPIHWMaQRSqESWW0BHaHIxuKi3ibOGYG0GI8Z1TdExEq3h8c3MXO13TcfrReMVVzPY0Ewd4vyEc4UviNj0XAm9Ijhp3wd3dC0auxKzLsOce6YPkfqV65PM0hKU8SWBwElosCYMEixJIgG8zyVl2fjHQDUytmIALiDxILptrvXPH1nAkVA7SCD2T5EfktnBbSewtcHS5ukidNLGy04dRNLbwwarQxmpxl1RlR7IJBbOkghSWD2tGq53sna2Krv/iVahaJJB7INuA14+CnmVyF18N4z1mZh8xqtLOkyRWlvhu6LhNpA71JU8QHarm2F2iWqdwW1Z3rPn0cS16X8RtWY3VP0jdE2U6/2lt21nkkTBDiSTf7ulua5jicPkqOaRHateezqL+S7b08rmpgnRBIc0k7w2bx45VzLG4BuIirTPaIgjmBpyPzhcnUYpr0+j02WMld4VzD0TUqsYBLnODQOJJiF9f4DCilSp0m+qxjWDua0NHyXzR6MtjPqbXwzHtMMcapkR/LBeD4kAeK+nlVEbNUCIilIiIgIiICIiAiIgIiICIiAiIgIiICIiCv9J9hUqzKhLRL2hr3ADN2S4sM78pc63vHiVxjaGBdSe6m8XaY5EbiORC+hiFz/AKe9HcwzsHabOXm3Us7xqEHLOr9m8i8i/jH0T2mgeQt5A/L6LbrUD3Hdu+KwudOp/q4j3kHkgPLmva143Aj5T+48Qo+rsWi8BzSaRO67mz43+KkWtLQSbnwIPAngd0r8y9iNZNuZ1uDo6x5E6oIf/wAbiqBzU5Mb2GfNp17oKzYbpE9pIqNmNY7JHeP2UwDDmkbxBiRz0Om+3elUNeCKjG1C3ebOy8RvBhW4818c71lRm02LNG167vzB7Ypv9oA8DY/5UpSxZEKvV+jtJxPVPLDE5XXbHI6/NarsJi6FwC5vFvbb5ageAW7H+JTHV4cnP+CVnvHP2n/Vx2rXdVoPpjV0Dh7QP5Ki44nDVQGmQWtcRoDmkqQwfSKLPb4j6LBt406resY4F3ZHMAAgW1vPwU6i2LNXes9vGkx59NfjeOvn66B6FKArYrEYkAxTospCfvVHFx8gwf1Lsa596EcAKez3Vf8AerPcDpLWRSHhLHHxXQVzJd+PBERQkREQEREBERAREQEREBERAREQEREBERAWHFYcVGlp37+B3ELMiDk3SXZJpVCYgT2gNJ3Eciq+/BgkkS0nWND3hdi6RbLFamSBLgNPvDeO/eFy3E0CxxafA8QghKuz3TaCNCBaZ5G3md6wnDuPZMCBLS+W5gPZzb3cPDUqcX4WoIPVwdu0OYTccTuvoV6p+2dY7oPAngY37xHhJvwTDNonWLT4aLF9gI97dPquI57ig0wIayLkG0X7xB0Pu8jEbtikSHFrTEdpom3AgjWPlPcv1+FIAGkERmEeGYfDhZbNPDnMZBAcNSM0Eb5FwY9rz3INSthKVYTUpBxdoW9l/cTbnGoPxXrB9BaNZxbTrljtRmgwNCCLTB7iJupLDUJpsPvwbdYA6fugzM6jS8tOkzOHs6qbEABxk9Y0ECM33xPEaRebIL50VwAw2Ew+GBk0qbWExGZwHacBul0nxUuqdsvHPgFvZj2ZJiLEEG4P6BKtOCxQqNka7xwKDYREQEREBERAREQEREBERAREQEREBERAREQEREBUjptsX/VYLE35PP5O+ferusdei17XMcJa4QRyKDiq/QpfpPsZ2HqXu0nsu+9/9cfPeohqD20LPRprzSYt6hTQZqGFBW3T2OzcC08WmPhofELJhGqUoNQRFXYTiQQWvEQ4HNTc5v4m+0NQYH5jE/D1GEvqNMgRLgBmZNgKrDDHjS/rePZtdJq26bPBBUtnvysY0mQf5boNRjmi/Zc2HNMcdIMWECYwWJLTnbETHZcHNPKf8LdxGyKLz2mZSTOZhcwlwvJym533lalbYDw/rGPa82BDxlc4DQZ2WEfhuJB3QFiw1cPaHD9jwWVV7CdbSObIQJgtlpkcbH4qeo1Q4BzbhB7REQEREBERAREQEREBERAREQEREBERAREQEREGHFYVlRuV7Q4fKQRIOoMEiRxVbxfQeif5b3U+Rh4/I/FWpEHP6/RLEM9UNqD3TfydC1OodTMPa5h94FvzXS1+OaCIIkcEFDoBSOHU3X2JQdfJkPFktPwstR+wnN/l1J5PE/3Nj5IPyitymtHqazPWpkjiwh3w1WWjjG6TB4GWnyKCQgEQV5bU3HX5jivAevFR0/keCDK5y8Nr5T81gFaeRGo+nJYqlRBNU3hwkL0oHDY7IeLTqPzCnKbw4AgyDoUHpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXipSa6zgHd4BXtEGk7ZjPZzM/CTHkVifgag0c13eIPwUkiCCrUHgglpHMQRHAlatSorOsdSg12oBQVKpUWfZe1uqdDvUOvLmFM19jU3adnuUXiejbvYdPegsjXAgEGQbgr9Vf2KMRRcKVRpdTJs4Xyn6fJWBAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",
    tags: ["Core i5", "8GB RAM", "SSD 256GB"],
  },
  {
    id: 3,
    name: "HP Spectre x360 14",
    price: "24.990.000",
    category: "Ultrabook",
    brand: "HP",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 1TB"],
  },
  {
    id: 4,
    name: "Asus ZenBook 14",
    price: "19.990.000",
    category: "Laptop cao cấp",
    brand: "Asus",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 512GB"],
  },
  {
    id: 5,
    name: "Acer Aspire 5",
    price: "12.990.000",
    category: "Laptop phổ thông",
    brand: "Acer",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i3", "4GB RAM", "SSD 256GB"],
  },
  {
    id: 6,
    name: "MacBook Air M2",
    price: "30.990.000",
    category: "Ultrabook",
    brand: "Apple",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["M2 Chip", "8GB RAM", "SSD 512GB"],
  },
  {
    id: 7,
    name: "Dell XPS 13",
    price: "27.990.000",
    category: "Laptop cao cấp",
    brand: "Dell",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 1TB"],
  },
  {
    id: 8,
    name: "MSI GF63 Thin",
    price: "18.990.000",
    category: "Laptop gaming",
    brand: "MSI",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 512GB", "GTX 1650"],
  },
  {
    id: 9,
    name: "Razer Blade 15",
    price: "40.990.000",
    category: "Laptop gaming",
    brand: "Razer",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 1TB", "RTX 3070"],
  },
  {
    id: 10,
    name: "Gigabyte Aero 15",
    price: "35.990.000",
    category: "Laptop gaming",
    brand: "Gigabyte",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i9", "32GB RAM", "SSD 1TB", "RTX 3080"],
  },
  {
    id: 11,
    name: "Lenovo IdeaPad Flex 5",
    price: "14.990.000",
    category: "Laptop 2-in-1",
    brand: "Lenovo",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 256GB"],
  },
  {
    id: 12,
    name: "HP Pavilion x360",
    price: "16.990.000",
    category: "Laptop 2-in-1",
    brand: "HP",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 512GB"],
  },
  {
    id: 13,
    name: "Microsoft Surface Laptop 4",
    price: "29.990.000",
    category: "Ultrabook",
    brand: "Microsoft",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 512GB"],
  },
  {
    id: 14,
    name: "Asus TUF Gaming F15",
    price: "22.990.000",
    category: "Laptop gaming",
    brand: "Asus",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 512GB", "RTX 3050"],
  },
  {
    id: 15,
    name: "Samsung Galaxy Book Pro",
    price: "23.990.000",
    category: "Ultrabook",
    brand: "Samsung",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 256GB"],
  },
  {
    id: 16,
    name: "HP Elite Dragonfly",
    price: "45.990.000",
    category: "Ultrabook",
    brand: "HP",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 1TB"],
  },
  {
    id: 17,
    name: "LG Gram 17",
    price: "27.990.000",
    category: "Laptop siêu nhẹ",
    brand: "LG",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 512GB"],
  },
  {
    id: 18,
    name: "Asus VivoBook 15",
    price: "13.990.000",
    category: "Laptop phổ thông",
    brand: "Asus",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i3", "4GB RAM", "HDD 1TB"],
  },
  {
    id: 19,
    name: "MSI Pulse GL66",
    price: "24.990.000",
    category: "Laptop gaming",
    brand: "MSI",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 512GB", "RTX 3060"],
  },
  {
    id: 20,
    name: "Toshiba Dynabook Tecra A50",
    price: "19.990.000",
    category: "Laptop doanh nhân",
    brand: "Toshiba",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 256GB"],
  },
  {
    id: 21,
    name: "Huawei MateBook D 15",
    price: "15.990.000",
    category: "Laptop phổ thông",
    brand: "Huawei",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i5", "8GB RAM", "SSD 512GB"],
  },
  {
    id: 22,
    name: "Acer Predator Helios 300",
    price: "29.990.000",
    category: "Laptop gaming",
    brand: "Acer",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Core i7", "16GB RAM", "SSD 1TB", "RTX 3070"],
  },
];

const ProductCategory: React.FC = () => {
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(12);

  const fetchDescription = async (): Promise<void> => {
    setTimeout(() => {
      setDescription(
        "Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh."
      );
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchDescription();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Laptop</Title>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Paragraph>{description}</Paragraph>
      )}

      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        {fakeData.slice(0, visibleItems).map((laptop) => (
          <Col key={laptop.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={laptop.name} src={laptop.imageUrl} />}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Card.Meta
                title={
                  <div
                    style={{
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {laptop.name}
                  </div>
                }
                description={
                  <>
                    <p style={{ color: "#fe3464", fontWeight: "bold", fontSize: "16px" }}>
                      Giá: {laptop.price} VND
                    </p>
                    <div>
                      <Text
                        type="secondary"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Thương hiệu: {laptop.brand}
                      </Text>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <Text style={{ fontSize: "12px" }}>Thể loại:</Text>
                      <div style={{ marginTop: "5px" }}>
                        <Tag color="blue" style={{ fontSize: "12px" }}>
                          {laptop.category}
                        </Tag>
                        {laptop.tags.map((tag, index) => (
                          <Tag
                            color="gold"
                            key={index}
                            style={{ fontSize: "12px" }}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {visibleItems < fakeData.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" onClick={handleLoadMore}>
            Xem thêm
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
