export const HighSchoolQualification = {
    'Cambridge A Level': {'min': 0, 'max': 90},
    'Polytechnic Diploma': {'min': 0, 'max': 4},
    'International Baccalaurate': {'min': 0, 'max': 45},
    'SAT': {'min': 0, 'max': 600},
    'ACT': {'min': 0, 'max': 36},
    'Brunei A Level': {'min': 0, 'max': 90},
    'Indonesian Ujian Nasional Berbasis Komputer': {'min': 0, 'max': 100},
    'Sijil Tinggi Persekolahan Malaysia (STPM)': {'min': 0, 'max': 4},
    'Vietnam National High School Graduation Examination': {'min': 0, 'max': 10},
    'Gao Kao or PRC National College Entrance Examination': {'min': 0, 'max': 750},
    'HKDSE/Hong Kong A Level': {'min': 1, 'max': 5},
    'Indian Standard 12': {'min': 0, 'max': 100},
    'Sri Lanka A Level': {'min': 0, 'max': 100},
    'Thailand Certificate of Secondary Education (Mathayom 6)': {'min': 0, 'max': 100},
    'Other High School Qualifications': {'min': 0, 'max': 100}
}

var tempArr = []
for(var qualification in HighSchoolQualification) {
    tempArr.push(qualification)
}

export const HighSchoolQualificationArray = tempArr;