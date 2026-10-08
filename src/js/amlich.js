export const PI		= Math.PI;
export const INT		= Math.floor;
export const SIN		= Math.sin;
export const DR		= PI / 180;
export const MOONPHASE = 29.530588853;
export const TIMEZONE	= 7;
export const SO		= [ 'Một', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Mười Hai'];
export const NAM		= [ ...SO ].map((el, i) => !i ? 'Giêng' : i == 11 ? 'Chạp' : el);
export const CAN   	= [ 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
export const CHI   	= [ 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
export const GIO_HD	= [ '110100101100', '001101001011', '110011010010', '101100110100', '001011001101', '010010110011'];
export const TIETKHI	= [ 'Xuân Phân', 'Thanh Minh', 'Cốc Vũ', 'Lập Hạ', 'Tiểu Mãn', 'Mang Chủng',
					'Hạ Chí', 'Tiểu Thử', 'Đại Thử', 'Lập Thu', 'Xử Thử', 'Bạch Lộ',
					'Thu Phân', 'Hàn Lộ', 'Sương Giáng', 'Lập Đông', 'Tiểu Tuyết', 'Đại Tuyết',
					'Đông Chí', 'Tiểu Hàn', 'Đại Hàn', 'Lập Xuân', 'Vũ Thủy', 'Kinh Trập'];
export const EVENTS 	= [
					[0, 1, 1, 'Tết Nguyên Đán'],
					[0, 15, 1, 'Tết Nguyên Tiêu (Lễ Thượng Nguyên)'],
					[0, 3, 3, 'Tết Hàn Thực'],
					[0, 10, 3, 'Giỗ Tổ Hùng Vương'],
					[0, 15, 4, 'Lễ Phật Đản'],
					[0, 5, 5, 'Lễ Đoan Ngọ'],
					[0, 15, 7, 'Lễ Vu Lan'],
					[0, 15, 8, 'Tết Trung Thu'],
					[0, 9, 9, 'Tết Trùng Cửu'],
					[0, 10, 10, 'Tết Thường Tân'],
					[0, 15, 10, 'Tết Hạ Nguyên'],
					[0, 23, 12, 'Ông Táo về trời'],

					[1, 1, 1, 'Tết Dương lịch'],
					[1, 9, 1, 'Ngày Học sinh - Sinh viên Việt Nam'],
					[1, 3, 2, 'Ngày thành lập Đảng Cộng sản Việt Nam'],
					[1, 14, 2, 'Lễ tình nhân (Valentine)'],
					[1, 27, 2, 'Ngày Thầy thuốc Việt Nam'],
					[1, 8, 3, 'Ngày Quốc tế Phụ nữ'],
					[1, 20, 3, 'Ngày Quốc tế Hạnh phúc'],
					[1, 22, 3, 'Ngày Nước sạch Thế giới'],
					[1, 26, 3, 'Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh'],
					[1, 27, 3, 'Ngày Thể thao Việt Nam'],
					[1, 1, 4, 'Ngày Cá tháng Tư'],
					[1, 21, 4, 'Ngày Sách Việt Nam'],
					[1, 22, 4, 'Ngày Trái đất'],
					[1, 30, 4, 'Ngày giải phóng miền Nam'],
					[1, 1, 5, 'Ngày Quốc tế Lao động'],
					[1, 7, 5, 'Ngày chiến thắng Điện Biên Phủ'],
					[1, 13, 5, 'Ngày của mẹ'],
					[1, 15, 5, 'Ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh'],
					[1, 19, 5, 'Ngày sinh của Chủ tịch Hồ Chí Minh'],
					[1, 1, 6, 'Ngày Quốc tế Thiếu nhi'],
					[1, 5, 6, 'Ngày Bác Hồ ra đi tìm đường cứu nước'],
					[1, 5, 6, 'Ngày môi trường thế giới'],
					[1, 17, 6, 'Ngày của cha'],
					[1, 21, 6, 'Ngày báo chí Việt Nam'],
					[1, 28, 6, 'Ngày Gia đình Việt Nam'],
					[1, 11, 7, 'Ngày dân số thế giới'],
					[1, 27, 7, 'Ngày Thương binh Liệt sĩ'],
					[1, 28, 7, 'Ngày thành lập công đoàn Việt Nam'],
					[1, 19, 8, 'Ngày Cách mạng tháng Tám thành công'],
					[1, 2, 9, 'Ngày Quốc khánh nước Cộng hoà Xã hội Chủ nghĩa Việt Nam'],
					[1, 10, 9, 'Ngày thành lập Mặt trận Tổ quốc Việt Nam'],
					[1, 1, 10, 'Ngày quốc tế người cao tuổi'],
					[1, 10, 10, 'Ngày giải phóng thủ đô'],
					[1, 13, 10, 'Ngày Doanh nhân Việt Nam'],
					[1, 20, 10, 'Ngày thành lập Hội Phụ nữ Việt Nam'],
					[1, 31, 10, 'Ngày Halloween'],
					[1, 9, 11, 'Ngày pháp luật Việt Nam'],
					[1, 20, 11, 'Ngày Nhà giáo Việt Nam'],
					[1, 23, 11, 'Ngày thành lập Hội chữ thập đỏ Việt Nam'],
					[1, 1, 12, 'Ngày thế giới phòng chống AIDS'],
					[1, 19, 12, 'Ngày toàn quốc kháng chiến'],
					[1, 22, 12, 'Ngày thành lập Quân đội Nhân dân Việt Nam'],
					[1, 25, 12, 'Ngày Lễ Giáng Sinh'],
				];

export function jdFromDate(dd, mm, yy) {
	let a = INT((14 - mm) / 12);
	let y = yy + 4800 - a;
	let m = mm + 12 * a - 3;
	let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
	if (jd < 2299161) {
		jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
	}
	return jd;
}

export function jdToDate(jd) {
	let a, b, c, d, e, m, day, month, year;
	if (jd > 2299160) {
		a = jd + 32044;
		b = INT((4 * a + 3) / 146097);
		c = a - INT((b * 146097) / 4);
	} else {
		b = 0;
		c = jd + 32082;
	}
	d = INT((4 * c + 3) / 1461);
	e = c - INT((1461 * d) / 4);
	m = INT((5 * e + 2) / 153);
	day = e - INT((153 * m + 2) / 5) + 1;
	month = m + 3 - 12 * INT(m / 10);
	year = b * 100 + d - 4800 + INT(m / 10);
	return [day, month, year];
}

export function getNewMoonDay(k) {
	let T, T2, T3, Jd1, M, Mpr, F, C1, deltat, JdNew;
	T = k / 1236.85;
	T2 = T * T;
	T3 = T2 * T;
	Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
	Jd1 = Jd1 + 0.00033 * SIN((166.56 + 132.87 * T - 0.009173 * T2) * DR);
	M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
	Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
	F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
	C1 = (0.1734 - 0.000393 * T) * SIN(M * DR) + 0.0021 * SIN(2 * DR * M);
	C1 = C1 - 0.4068 * SIN(Mpr * DR) + 0.0161 * SIN(DR * 2 * Mpr);
	C1 = C1 - 0.0004 * SIN(DR * 3 * Mpr);
	C1 = C1 + 0.0104 * SIN(DR * 2 * F) - 0.0051 * SIN(DR * (M + Mpr));
	C1 = C1 - 0.0074 * SIN(DR * (M - Mpr)) + 0.0004 * SIN(DR * (2 * F + M));
	C1 = C1 - 0.0004 * SIN(DR * (2 * F - M)) - 0.0006 * SIN(DR * (2 * F + Mpr));
	C1 = C1 + 0.001 * SIN(DR * (2 * F - Mpr)) + 0.0005 * SIN(DR * (2 * Mpr + M));
	if (T < -11) {
		deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
	} else {
		deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
	}
	JdNew = Jd1 + C1 - deltat;
	return INT(JdNew + 0.5 + TIMEZONE / 24);
}

export function SunLongitude(jdn) {
	var T, T2, M, L0, DL, L, O;
	T = (jdn - 2451545.0 ) / 36525;
	T2 = T * T;
	M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
	L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
	DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * SIN(DR * M);
	DL = DL + (0.019993 - 0.000101 * T) * SIN(DR * 2 * M) + 0.00029 * SIN(DR * 3 * M);
    O = 125.04 - 1934.136 * T;
    L = L0 + DL - 0.00569 - 0.00478 * SIN(O * DR);
    L = L * DR;
	L = L - PI * 2 * INT(L / (PI * 2));
    return L;
}

export function getSunLongitude(jdn) {
	let T, T2, M, L0, DL, L;
	T = (jdn - 2451545.5 - TIMEZONE / 24) / 36525;
	T2 = T * T;
	M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
	L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
	DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * SIN(DR * M);
	DL = DL + (0.019993 - 0.000101 * T) * SIN(DR * 2 * M) + 0.00029 * SIN(DR * 3 * M);
	L = L0 + DL;
	L = L * DR;
	L = L - PI * 2 * INT(L / (PI * 2));
	return INT(L / PI * 6);
}

export function getLunarMonth11(yy) {
	let k, off, nm, sunLong;
	off = jdFromDate(31, 12, yy) - 2415021;
	k = INT(off / MOONPHASE);
	nm = getNewMoonDay(k);
	sunLong = getSunLongitude(nm);
	if (sunLong >= 9) {
		nm = getNewMoonDay(k - 1);
	}
	return nm;
}

export function getLeapMonthOffset(a11) {
	let k, last, arc, i;
	k = INT((a11 - 2415021.076998695) / MOONPHASE + 0.5);
	last = 0;
	i = 1;
	arc = getSunLongitude(getNewMoonDay(k + i));
	do {
		last = arc;
		i++;
		arc = getSunLongitude(getNewMoonDay(k + i));
	} while (arc != last && i < 14);
	return i - 1;
}

export function convertSolar2Lunar(dd, mm, yy) {
	let k, dayNumber, monthStart, a11, b11, diff, leapMonthDiff, lunarDay, lunarMonth, lunarYear, lunarLeap;
	dayNumber = jdFromDate(dd, mm, yy);
	k = INT((dayNumber - 2415021.076998695) / MOONPHASE);
	monthStart = getNewMoonDay(k + 1);
	if (monthStart > dayNumber) {
		monthStart = getNewMoonDay(k);
	}
	a11 = getLunarMonth11(yy);
	b11 = a11;
	if (a11 >= monthStart) {
		lunarYear = yy;
		a11 = getLunarMonth11(yy - 1);
	} else {
		lunarYear = yy + 1;
		b11 = getLunarMonth11(yy + 1);
	}
	lunarDay = dayNumber - monthStart + 1;
	diff = INT((monthStart - a11) / 29);
	lunarLeap = 0;
	lunarMonth = diff + 11;
	if (b11 - a11 > 365) {
		leapMonthDiff = getLeapMonthOffset(a11);
		if (diff >= leapMonthDiff) {
			lunarMonth = diff + 10;
			if (diff == leapMonthDiff) {
				lunarLeap = 1;
			}
		}
	}
	if (lunarMonth > 12) {
		lunarMonth = lunarMonth - 12;
	}
	if (lunarMonth >= 11 && diff < 4) {
		lunarYear -= 1;
	}

	return [lunarDay, lunarMonth, lunarYear, lunarLeap, dayNumber];
}

export function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap) {
	let k, a11, b11, off, leapOff, leapMonth, monthStart;
	if (lunarMonth < 11) {
		a11 = getLunarMonth11(lunarYear - 1);
		b11 = getLunarMonth11(lunarYear);
	} else {
		a11 = getLunarMonth11(lunarYear);
		b11 = getLunarMonth11(lunarYear + 1);
	}
	off = lunarMonth - 11;
	if (off < 0) {
		off += 12;
	}
	if (b11 - a11 > 365) {
		leapOff = getLeapMonthOffset(a11);
		leapMonth = leapOff - 2;
		if (leapMonth < 0) {
			leapMonth += 12;
		}
		if (lunarLeap != 0 && lunarMonth != leapMonth) {
			return [0, 0, 0];
		} else if (lunarLeap != 0 || off >= leapOff) {
			off += 1;
		}
	}
	k = INT(0.5 + (a11 - 2415021.076998695) / MOONPHASE);
	monthStart = getNewMoonDay(k + off);
	return jdToDate(monthStart + lunarDay - 1);
}

export function getTietKhi(jdn) {
	return TIETKHI[INT(SunLongitude(jdn + 1 - 0.5 - TIMEZONE/24.0) / PI * 12)];
}

export function getYearCanChi(year) {
	return CAN[(year + 6) % 10] + ' ' + CHI[(year + 8) % 12];
}

export function getCanHour0(jdn) {
	return CAN[(jdn - 1) * 2 % 10];
}

export function getHourCanChi(jdn) {
	let hour = new Date().getHours();
	let chi = hour >= 1 && hour < 23 ? hour + 1 >> 1 : 0;
	let can = (jdn - 1) * 2 % 10;
	can = ( can + chi ) % 10;
	return CAN[can] + ' ' + CHI[chi];
}

export function getCanChi(day, month, year, leap, jd) {
	let dayName, monthName, yearName;
	dayName = CAN[(jd + 9) % 10] + ' ' + CHI[(jd + 1) % 12];
	monthName = CAN[(year * 12 + month + 3) % 10] + ' ' + CHI[(month + 1) % 12];
	if (leap == 1) {
		monthName += ' (nhuận)';
	}
	yearName = getYearCanChi(year);
	return [dayName, monthName, yearName];
}

export function getGioHoangDao(jd) {
	let chiOfDay = (jd + 1) % 12;
	let gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	let ret = '';
	let count = 0;
	for (let i = 0; i < 12; i++) {
		if (gioHD.charAt(i) == '1') {
			ret += '<span>' + CHI[i];
			ret += ' (' + ( i * 2 + 23) % 24 + '-' + (i * 2 + 1) % 24 + ')</span>';
			if (count++ < 5) ret += ', ';
			if (count == 3) ret += '<br>';
		}
	}
	return ret;
}

export function dateToLunar(date) {
	return convertSolar2Lunar(date.getDate(), date.getMonth() + 1, date.getFullYear());
}

export function isSameDay(date1, date2) {
	return date1.getFullYear() == date2.getFullYear() &&
		date1.getMonth() == date2.getMonth() &&
		date1.getDate() == date2.getDate();
}

export function isToday(date) {
	return isSameDay(date, new Date());
}
