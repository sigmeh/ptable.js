/*		ptable.js
	
	This script generates a periodic table dynamically from json data (json data is formulated from NIST 2017 data via mass_data_gen.py) 
	This program utilizes jquery as its only dependency.
	ptable.js can be embedded in any application via simple script tags + DOM placement:
	
	<script type="text/javascript" src="ptable.js"></script>
	<div id="periodic_table"></div>
		

*/

//var elements_list = [{"abundances": [0.99989, 0.00012], "atomic_num": 1, "symbol": "H", "std_atomic_weight": "[1.00784,1.00811]", "atomic_weight": 1.0079608306999999, "masses": [1.00783, 2.0141]}, {"abundances": [0.0, 1.0], "atomic_num": 2, "symbol": "He", "std_atomic_weight": "4.002602", "atomic_weight": 4.0026, "masses": [3.01603, 4.0026]}, {"abundances": [0.0759, 0.9241], "atomic_num": 3, "symbol": "Li", "std_atomic_weight": "[6.938,6.997]", "atomic_weight": 6.940033208, "masses": [6.01512, 7.016]}, {"abundances": [1.0], "atomic_num": 4, "symbol": "Be", "std_atomic_weight": "9.0121831", "atomic_weight": 9.01218, "masses": [9.01218]}, {"abundances": [0.199, 0.801], "atomic_num": 5, "symbol": "B", "std_atomic_weight": "[10.806,10.821]", "atomic_weight": 10.81103237, "masses": [10.01294, 11.00931]}, {"abundances": [0.9893, 0.0107], "atomic_num": 6, "symbol": "C", "std_atomic_weight": "[12.0096,12.0116]", "atomic_weight": 12.010735845, "masses": [12.0, 13.00335]}, {"abundances": [0.99636, 0.00364], "atomic_num": 7, "symbol": "N", "std_atomic_weight": "[14.00643,14.00728]", "atomic_weight": 14.0066992256, "masses": [14.00307, 15.00011]}, {"abundances": [0.99757, 0.00038, 0.00205], "atomic_num": 8, "symbol": "O", "std_atomic_weight": "[15.99903,15.99977]", "atomic_weight": 15.999400316100001, "masses": [15.99491, 16.99913, 17.99916]}, {"abundances": [1.0], "atomic_num": 9, "symbol": "F", "std_atomic_weight": "18.998403163", "atomic_weight": 18.9984, "masses": [18.9984]}, {"abundances": [0.9048, 0.0027, 0.0925], "atomic_num": 10, "symbol": "Ne", "std_atomic_weight": "20.1797", "atomic_weight": 20.180046682, "masses": [19.99244, 20.99385, 21.99139]}, {"abundances": [1.0], "atomic_num": 11, "symbol": "Na", "std_atomic_weight": "22.98976928", "atomic_weight": 22.98977, "masses": [22.98977]}, {"abundances": [0.7899, 0.1, 0.1101], "atomic_num": 12, "symbol": "Mg", "std_atomic_weight": "[24.304,24.307]", "atomic_weight": 24.305050255000005, "masses": [23.98504, 24.98584, 25.98259]}, {"abundances": [1.0], "atomic_num": 13, "symbol": "Al", "std_atomic_weight": "26.9815385", "atomic_weight": 26.98154, "masses": [26.98154]}, {"abundances": [0.92223, 0.04685, 0.03092], "atomic_num": 14, "symbol": "Si", "std_atomic_weight": "[28.084,28.086]", "atomic_weight": 28.0855016788, "masses": [27.97693, 28.97649, 29.97377]}, {"abundances": [1.0], "atomic_num": 15, "symbol": "P", "std_atomic_weight": "30.973761998", "atomic_weight": 30.97376, "masses": [30.97376]}, {"abundances": [0.9499, 0.0075, 0.0425, 0.0001], "atomic_num": 16, "symbol": "S", "std_atomic_weight": "[32.059,32.076]", "atomic_weight": 32.064786426, "masses": [31.97207, 32.97146, 33.96787, 35.96708]}, {"abundances": [0.7576, 0.2424], "atomic_num": 17, "symbol": "Cl", "std_atomic_weight": "[35.446,35.457]", "atomic_weight": 35.452934920000004, "masses": [34.96885, 36.9659]}, {"abundances": [0.00334, 0.00063, 0.99604], "atomic_num": 18, "symbol": "Ar", "std_atomic_weight": "39.948", "atomic_weight": 39.9481771121, "masses": [35.96755, 37.96273, 39.96238]}, {"abundances": [0.93258, 0.00012, 0.0673], "atomic_num": 19, "symbol": "K", "std_atomic_weight": "39.0983", "atomic_weight": 39.098303510799994, "masses": [38.96371, 39.964, 40.96183]}, {"abundances": [0.96941, 0.00647, 0.00135, 0.02086, 4e-05, 0.00187], "atomic_num": 20, "symbol": "Ca", "std_atomic_weight": "40.078", "atomic_weight": 40.0780216556, "masses": [39.96259, 41.95862, 42.95877, 43.95548, 45.95369, 47.95252]}, {"abundances": [1.0], "atomic_num": 21, "symbol": "Sc", "std_atomic_weight": "44.955908", "atomic_weight": 44.95591, "masses": [44.95591]}, {"abundances": [0.0825, 0.0744, 0.7372, 0.0541, 0.0518], "atomic_num": 22, "symbol": "Ti", "std_atomic_weight": "47.867", "atomic_weight": 47.866744176, "masses": [45.95263, 46.95176, 47.94794, 48.94787, 49.94479]}, {"abundances": [0.0025, 0.9975], "atomic_num": 23, "symbol": "V", "std_atomic_weight": "50.9415", "atomic_weight": 50.941468, "masses": [49.94716, 50.94396]}, {"abundances": [0.04345, 0.83789, 0.09501, 0.02365], "atomic_num": 24, "symbol": "Cr", "std_atomic_weight": "51.9961", "atomic_weight": 51.996135030400005, "masses": [49.94604, 51.94051, 52.94065, 53.93888]}, {"abundances": [1.0], "atomic_num": 25, "symbol": "Mn", "std_atomic_weight": "54.938044", "atomic_weight": 54.93804, "masses": [54.93804]}, {"abundances": [0.05845, 0.91754, 0.02119, 0.00282], "atomic_num": 26, "symbol": "Fe", "std_atomic_weight": "55.845", "atomic_weight": 55.8451477876, "masses": [53.93961, 55.93494, 56.93539, 57.93327]}, {"abundances": [1.0], "atomic_num": 27, "symbol": "Co", "std_atomic_weight": "58.933194", "atomic_weight": 58.93319, "masses": [58.93319]}, {"abundances": [0.68077, 0.26223, 0.0114, 0.03635, 0.00925], "atomic_num": 28, "symbol": "Ni", "std_atomic_weight": "58.6934", "atomic_weight": 58.6933358025, "masses": [57.93534, 59.93079, 60.93106, 61.92835, 63.92797]}, {"abundances": [0.6915, 0.3085], "atomic_num": 29, "symbol": "Cu", "std_atomic_weight": "63.546", "atomic_weight": 63.546041615, "masses": [62.9296, 64.92779]}, {"abundances": [0.4917, 0.2773, 0.0404, 0.1845, 0.0061], "atomic_num": 30, "symbol": "Zn", "std_atomic_weight": "65.38", "atomic_weight": 65.37777974100001, "masses": [63.92914, 65.92603, 66.92713, 67.92484, 69.92532]}, {"abundances": [0.60108, 0.39892], "atomic_num": 31, "symbol": "Ga", "std_atomic_weight": "69.723", "atomic_weight": 69.7230629396, "masses": [68.92557, 70.9247]}, {"abundances": [0.2057, 0.2745, 0.0775, 0.365, 0.0773], "atomic_num": 32, "symbol": "Ge", "std_atomic_weight": "72.630", "atomic_weight": 72.62755225500001, "masses": [69.92425, 71.92208, 72.92346, 73.92118, 75.9214]}, {"abundances": [1.0], "atomic_num": 33, "symbol": "As", "std_atomic_weight": "74.921595", "atomic_weight": 74.92159, "masses": [74.92159]}, {"abundances": [0.0089, 0.0937, 0.0763, 0.2377, 0.4961, 0.0873], "atomic_num": 34, "symbol": "Se", "std_atomic_weight": "78.971", "atomic_weight": 78.959387251, "masses": [73.92248, 75.91921, 76.91991, 77.91731, 79.91652, 81.9167]}, {"abundances": [0.5069, 0.4931], "atomic_num": 35, "symbol": "Br", "std_atomic_weight": "[79.901,79.907]", "atomic_weight": 79.90352914500001, "masses": [78.91834, 80.91629]}, {"abundances": [0.00355, 0.02286, 0.11593, 0.115, 0.56987, 0.17279], "atomic_num": 36, "symbol": "Kr", "std_atomic_weight": "83.798", "atomic_weight": 83.79800121810001, "masses": [77.92036, 79.91638, 81.91348, 82.91413, 83.9115, 85.91061]}, {"abundances": [0.7217, 0.2783], "atomic_num": 37, "symbol": "Rb", "std_atomic_weight": "85.4678", "atomic_weight": 85.467663637, "masses": [84.91179, 86.90918]}, {"abundances": [0.0056, 0.0986, 0.07, 0.8258], "atomic_num": 38, "symbol": "Sr", "std_atomic_weight": "87.62", "atomic_weight": 87.61664252599999, "masses": [83.91342, 85.90926, 86.90888, 87.90561]}, {"abundances": [1.0], "atomic_num": 39, "symbol": "Y", "std_atomic_weight": "88.90584", "atomic_weight": 88.90584, "masses": [88.90584]}, {"abundances": [0.5145, 0.1122, 0.1715, 0.1738, 0.028], "atomic_num": 40, "symbol": "Zr", "std_atomic_weight": "91.224", "atomic_weight": 91.223641841, "masses": [89.9047, 90.90564, 91.90503, 93.90631, 95.90827]}, {"abundances": [1.0], "atomic_num": 41, "symbol": "Nb", "std_atomic_weight": "92.90637", "atomic_weight": 92.90637, "masses": [92.90637]}, {"abundances": [0.1453, 0.0915, 0.1584, 0.1667, 0.096, 0.2439, 0.0982], "atomic_num": 42, "symbol": "Mo", "std_atomic_weight": "95.95", "atomic_weight": 95.95978805899999, "masses": [91.90681, 93.90508, 94.90584, 95.90468, 96.90602, 97.9054, 99.90747]}, {"abundances": [], "atomic_num": 43, "symbol": "Tc", "std_atomic_weight": "[98]", "atomic_weight": 97.9072124, "masses": []}, {"abundances": [0.0554, 0.0187, 0.1276, 0.126, 0.1706, 0.3155, 0.1862], "atomic_num": 44, "symbol": "Ru", "std_atomic_weight": "101.07", "atomic_weight": 101.064938821, "masses": [95.90759, 97.90529, 98.90593, 99.90421, 100.90558, 101.90434, 103.90543]}, {"abundances": [1.0], "atomic_num": 45, "symbol": "Rh", "std_atomic_weight": "102.90550", "atomic_weight": 102.9055, "masses": [102.9055]}, {"abundances": [0.0102, 0.1114, 0.2233, 0.2733, 0.2646, 0.1172], "atomic_num": 46, "symbol": "Pd", "std_atomic_weight": "106.42", "atomic_weight": 106.415326728, "masses": [101.9056, 103.90403, 104.90508, 105.90348, 107.90389, 109.90517]}, {"abundances": [0.51839, 0.48161], "atomic_num": 47, "symbol": "Ag", "std_atomic_weight": "107.8682", "atomic_weight": 107.8681510687, "masses": [106.90509, 108.90476]}, {"abundances": [0.0125, 0.0089, 0.1249, 0.128, 0.2413, 0.1222, 0.2873, 0.0749], "atomic_num": 48, "symbol": "Cd", "std_atomic_weight": "112.414", "atomic_weight": 112.41155855599999, "masses": [105.90646, 107.90418, 109.90301, 110.90418, 111.90276, 112.90441, 113.90337, 115.90476]}, {"abundances": [0.0429, 0.9571], "atomic_num": 49, "symbol": "In", "std_atomic_weight": "114.818", "atomic_weight": 114.818087722, "masses": [112.90406, 114.90388]}, {"abundances": [0.0097, 0.0066, 0.0034, 0.1454, 0.0768, 0.2422, 0.0859, 0.3258, 0.0463, 0.0579], "atomic_num": 50, "symbol": "Sn", "std_atomic_weight": "118.710", "atomic_weight": 118.710112029, "masses": [111.90482, 113.90278, 114.90334, 115.90174, 116.90295, 117.90161, 118.90331, 119.9022, 121.90344, 123.90528]}, {"abundances": [0.5721, 0.4279], "atomic_num": 51, "symbol": "Sb", "std_atomic_weight": "121.760", "atomic_weight": 121.75978116, "masses": [120.90381, 122.90421]}, {"abundances": [0.0009, 0.0255, 0.0089, 0.0474, 0.0707, 0.1884, 0.3174, 0.3408], "atomic_num": 52, "symbol": "Te", "std_atomic_weight": "127.60", "atomic_weight": 127.60312503, "masses": [119.90406, 121.90304, 122.90427, 123.90282, 124.90443, 125.90331, 127.90446, 129.90622]}, {"abundances": [1.0], "atomic_num": 53, "symbol": "I", "std_atomic_weight": "126.90447", "atomic_weight": 126.90447, "masses": [126.90447]}, {"abundances": [0.00095, 0.00089, 0.0191, 0.26401, 0.04071, 0.21232, 0.26909, 0.10436, 0.08857], "atomic_num": 54, "symbol": "Xe", "std_atomic_weight": "131.293", "atomic_weight": 131.2927707955, "masses": [123.90589, 125.9043, 127.90353, 128.90478, 129.90351, 130.90508, 131.90416, 133.90539, 135.90721]}, {"abundances": [1.0], "atomic_num": 55, "symbol": "Cs", "std_atomic_weight": "132.90545196", "atomic_weight": 132.90545, "masses": [132.90545]}, {"abundances": [0.00106, 0.00101, 0.02417, 0.06592, 0.07854, 0.11232, 0.71698], "atomic_num": 56, "symbol": "Ba", "std_atomic_weight": "137.327", "atomic_weight": 137.3268945851, "masses": [129.90632, 131.90506, 133.90451, 134.90569, 135.90458, 136.90583, 137.90525]}, {"abundances": [0.00089, 0.99911], "atomic_num": 57, "symbol": "La", "std_atomic_weight": "138.90547", "atomic_weight": 138.90547066750003, "masses": [137.90711, 138.90636]}, {"abundances": [0.00185, 0.00251, 0.8845, 0.11114], "atomic_num": 58, "symbol": "Ce", "std_atomic_weight": "140.116", "atomic_weight": 140.1157279504, "masses": [135.90713, 137.90599, 139.90544, 141.90925]}, {"abundances": [1.0], "atomic_num": 59, "symbol": "Pr", "std_atomic_weight": "140.90766", "atomic_weight": 140.90766, "masses": [140.90766]}, {"abundances": [0.27152, 0.12174, 0.23798, 0.08293, 0.17189, 0.05756, 0.05638], "atomic_num": 60, "symbol": "Nd", "std_atomic_weight": "144.242", "atomic_weight": 144.24159511679997, "masses": [141.90773, 142.90982, 143.91009, 144.91258, 145.91312, 147.9169, 149.9209]}, {"abundances": [], "atomic_num": 61, "symbol": "Pm", "std_atomic_weight": "[145]", "atomic_weight": 144.9127559, "masses": []}, {"abundances": [0.0307, 0.1499, 0.1124, 0.1382, 0.0738, 0.2675, 0.2275], "atomic_num": 62, "symbol": "Sm", "std_atomic_weight": "150.36", "atomic_weight": 150.36635553099998, "masses": [143.91201, 146.9149, 147.91483, 148.91719, 149.91728, 151.91974, 153.92222]}, {"abundances": [0.4781, 0.5219], "atomic_num": 63, "symbol": "Eu", "std_atomic_weight": "151.964", "atomic_weight": 151.96438022200002, "masses": [150.91986, 152.92124]}, {"abundances": [0.002, 0.0218, 0.148, 0.2047, 0.1565, 0.2484, 0.2186], "atomic_num": 64, "symbol": "Gd", "std_atomic_weight": "157.25", "atomic_weight": 157.252129362, "masses": [151.9198, 153.92087, 154.92263, 155.92213, 156.92397, 157.92411, 159.92706]}, {"abundances": [1.0], "atomic_num": 65, "symbol": "Tb", "std_atomic_weight": "158.92535", "atomic_weight": 158.92535, "masses": [158.92535]}, {"abundances": [0.00056, 0.00095, 0.02329, 0.18889, 0.25475, 0.24896, 0.2826], "atomic_num": 66, "symbol": "Dy", "std_atomic_weight": "162.500", "atomic_weight": 162.4994736263, "masses": [155.92428, 157.92442, 159.9252, 160.92694, 161.92681, 162.92874, 163.92918]}, {"abundances": [1.0], "atomic_num": 67, "symbol": "Ho", "std_atomic_weight": "164.93033", "atomic_weight": 164.93033, "masses": [164.93033]}, {"abundances": [0.00139, 0.01601, 0.33503, 0.22869, 0.26978, 0.1491], "atomic_num": 68, "symbol": "Er", "std_atomic_weight": "167.259", "atomic_weight": 167.25908264710003, "masses": [161.92879, 163.92921, 165.9303, 166.93205, 167.93238, 169.93547]}, {"abundances": [1.0], "atomic_num": 69, "symbol": "Tm", "std_atomic_weight": "168.93422", "atomic_weight": 168.93422, "masses": [168.93422]}, {"abundances": [0.00123, 0.02982, 0.1409, 0.2168, 0.16103, 0.32026, 0.12996], "atomic_num": 70, "symbol": "Yb", "std_atomic_weight": "173.054", "atomic_weight": 173.0541535447, "masses": [167.93389, 169.93477, 170.93633, 171.93639, 172.93822, 173.93887, 175.94258]}, {"abundances": [0.97401, 0.02599], "atomic_num": 71, "symbol": "Lu", "std_atomic_weight": "174.9668", "atomic_weight": 174.9668196409, "masses": [174.94078, 175.94269]}, {"abundances": [0.0016, 0.0526, 0.186, 0.2728, 0.1362, 0.3508], "atomic_num": 72, "symbol": "Hf", "std_atomic_weight": "178.49", "atomic_weight": 178.484981046, "masses": [173.94005, 175.94141, 176.94323, 177.94371, 178.94582, 179.94656]}, {"abundances": [0.00012, 0.99988], "atomic_num": 73, "symbol": "Ta", "std_atomic_weight": "180.94788", "atomic_weight": 180.9478799352, "masses": [179.94746, 180.948]}, {"abundances": [0.0012, 0.265, 0.1431, 0.3064, 0.2843], "atomic_num": 74, "symbol": "W", "std_atomic_weight": "183.84", "atomic_weight": 183.84177503400002, "masses": [179.94671, 181.9482, 182.95022, 183.95093, 185.95436]}, {"abundances": [0.374, 0.626], "atomic_num": 75, "symbol": "Re", "std_atomic_weight": "186.207", "atomic_weight": 186.20670280000002, "masses": [184.95295, 186.95575]}, {"abundances": [0.0002, 0.0159, 0.0196, 0.1324, 0.1615, 0.2626, 0.4078], "atomic_num": 76, "symbol": "Os", "std_atomic_weight": "190.23", "atomic_weight": 190.224859809, "masses": [183.95249, 185.95383, 186.95575, 187.95584, 188.95814, 189.95844, 191.96148]}, {"abundances": [0.373, 0.627], "atomic_num": 77, "symbol": "Ir", "std_atomic_weight": "192.217", "atomic_weight": 192.21605091, "masses": [190.96059, 192.96292]}, {"abundances": [0.00012, 0.00782, 0.3286, 0.3378, 0.2521, 0.07356], "atomic_num": 78, "symbol": "Pt", "std_atomic_weight": "195.084", "atomic_weight": 195.0844551178, "masses": [189.95993, 191.96104, 193.96268, 194.96479, 195.96495, 197.96789]}, {"abundances": [1.0], "atomic_num": 79, "symbol": "Au", "std_atomic_weight": "196.966569", "atomic_weight": 196.96657, "masses": [196.96657]}, {"abundances": [0.0015, 0.0997, 0.1687, 0.231, 0.1318, 0.2986, 0.0687], "atomic_num": 80, "symbol": "Hg", "std_atomic_weight": "200.592", "atomic_weight": 200.599166187, "masses": [195.96583, 197.96677, 198.96828, 199.96833, 200.9703, 201.97064, 203.97349]}, {"abundances": [0.2952, 0.7048], "atomic_num": 81, "symbol": "Tl", "std_atomic_weight": "[204.382,204.385]", "atomic_weight": 204.38341303200002, "masses": [202.97234, 204.97443]}, {"abundances": [0.014, 0.241, 0.221, 0.524], "atomic_num": 82, "symbol": "Pb", "std_atomic_weight": "207.2", "atomic_weight": 207.21690833000002, "masses": [203.97304, 205.97447, 206.9759, 207.97665]}, {"abundances": [1.0], "atomic_num": 83, "symbol": "Bi", "std_atomic_weight": "208.98040", "atomic_weight": 208.9804, "masses": [208.9804]}, {"abundances": [], "atomic_num": 84, "symbol": "Po", "std_atomic_weight": "[209]", "atomic_weight": 208.9824308, "masses": []}, {"abundances": [], "atomic_num": 85, "symbol": "At", "std_atomic_weight": "[210]", "atomic_weight": 209.9871479, "masses": []}, {"abundances": [], "atomic_num": 86, "symbol": "Rn", "std_atomic_weight": "[222]", "atomic_weight": 222.0175782, "masses": []}, {"abundances": [], "atomic_num": 87, "symbol": "Fr", "std_atomic_weight": "[223]", "atomic_weight": 223.019736, "masses": []}, {"abundances": [], "atomic_num": 88, "symbol": "Ra", "std_atomic_weight": "[226]", "atomic_weight": 226.0254103, "masses": []}, {"abundances": [], "atomic_num": 89, "symbol": "Ac", "std_atomic_weight": "[227]", "atomic_weight": 227.0277523, "masses": []}, {"abundances": [1.0], "atomic_num": 90, "symbol": "Th", "std_atomic_weight": "232.0377", "atomic_weight": 232.03806, "masses": [232.03806]}, {"abundances": [1.0], "atomic_num": 91, "symbol": "Pa", "std_atomic_weight": "231.03588", "atomic_weight": 231.03588, "masses": [231.03588]}, {"abundances": [5e-05, 0.0072, 0.99274], "atomic_num": 92, "symbol": "U", "std_atomic_weight": "238.02891", "atomic_weight": 238.0265596081, "masses": [234.04095, 235.04393, 238.05079]}, {"abundances": [], "atomic_num": 93, "symbol": "Np", "std_atomic_weight": "[237]", "atomic_weight": 237.0481736, "masses": []}, {"abundances": [], "atomic_num": 94, "symbol": "Pu", "std_atomic_weight": "[244]", "atomic_weight": 244.0642053, "masses": []}, {"abundances": [], "atomic_num": 95, "symbol": "Am", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 96, "symbol": "Cm", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 97, "symbol": "Bk", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 98, "symbol": "Cf", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 99, "symbol": "Es", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 100, "symbol": "Fm", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 101, "symbol": "Md", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 102, "symbol": "No", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 103, "symbol": "Lr", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 104, "symbol": "Rf", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 105, "symbol": "Db", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 106, "symbol": "Sg", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 107, "symbol": "Bh", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 108, "symbol": "Hs", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 109, "symbol": "Mt", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 110, "symbol": "Ds", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 111, "symbol": "Rg", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 112, "symbol": "Cn", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 113, "symbol": "Uut", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 114, "symbol": "Fl", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 115, "symbol": "Uup", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 116, "symbol": "Lv", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 117, "symbol": "Uus", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}, {"abundances": [], "atomic_num": 118, "symbol": "Uuo", "std_atomic_weight": "", "atomic_weight": "Unknown", "masses": []}]

$(document).on('click','.element',function(){
	$('#ptable_el_data').css({'display':'inline-block'});
	var selected_el = $(this).children().first().next().html();
	$('#ptable_el_data').html('<b>'+selected_el+'</b><br>');
	for ( var i in elements[selected_el]){
		$('#ptable_el_data').append(
			i +':<br>&nbsp;&nbsp;'+ elements[selected_el][i] + '<br>'
		);
	}
});




function make_ptable(){
/*	Iterate over main periodic table as rectangle of boxes (7 rows, 18 columns)
	using nested loops. 
	Create id for each element_box as its coordinates in the grid
	Check each id against pre-tabulated periodic_table_slots (i.e., spaces in the 
	grid that have elements, vs. empty grid spaces)
	
	
*/	
	var ptable_html = "\
		<div id='ptable'>\
			<div class='inline'>\
				<div id='ptable_title'>ptable.js</div>\
				<div id='ptable_main'></div>\
				<div id='ptable_lanthanides'></div>\
			</div>\
			<div id='ptable_el_data' class='border hidden'></div>\
		</div>\
	"
	
	$('#periodic_table').append(ptable_html)
	
	
	var ptable_slots = ["0,0", "0,17", "1,0", "1,1", "1,12", "1,13", "1,14", "1,15", "1,16", "1,17", "2,0", "2,1", "2,12", "2,13", "2,14", "2,15", "2,16", "2,17", "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "3,10", "3,11", "3,12", "3,13", "3,14", "3,15", "3,16", "3,17", "4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "4,10", "4,11", "4,12", "4,13", "4,14", "4,15", "4,16", "4,17", "5,0", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "5,10", "5,11", "5,12", "5,13", "5,14", "5,15", "5,16", "5,17", "6,0", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9", "6,10", "6,11", "6,12", "6,13", "6,14", "6,15", "6,16", "6,17"];
	//	ptable_main is a rectangular grid of squares
	// 	Elements are filled in (or not) based on whether their given id is contained in the above ptable_slots list
	// 	Each element's id is coded as "row,column"
	
	var c = 0;											// Counter value for iteration over periodic_table_slots  (subset of relevant grid squares)
	var el = 0;											// For iterating over element_list
	for (i=0; i < 7; i++){								// Nested for-loop generates rows/columns grid
		for (j=0; j < 18; j++){
		
			if (el == 56 || el == 89) 	el += 14;		// Skip lanthanides/actinides for now
			if (el == elements.length) return;			// End loop if no more elements
					
			var element_html = "\
				<div class='element_box {{CLASS}}'>\
					<div class='atomic_num'>{{ATOMIC_NUM}}</div>\
					<div class='element_symbol'>{{EL_SYMBOL}}</div>\
					<div class='atomic_weight'>{{ATOMIC_WEIGHT}}</div>\
				</div>\
				";
		
			var box_id = String(i)+','+String(j);			// id based on grid position	
			if ( box_id == ptable_slots[c] ){					
				element_html = element_html.replace('{{CLASS}}','element');
				atomic_num_replace = elements_list[el].atomic_num;
				el_symbol_replace = elements_list[el].symbol;
				atomic_weight_replace = String(elements_list[el].atomic_weight).substring(0,6);
				el++;
				c++;
			} else {				
				element_html = element_html.replace('{{CLASS}}','non-element');
				atomic_num_replace = '';
				el_symbol_replace = '';
				atomic_weight_replace = '';
			}
			
			$('#ptable_main').append(
				element_html
					.replace('{{ATOMIC_NUM}}',	atomic_num_replace)
					.replace('{{EL_SYMBOL}}',	el_symbol_replace)
					.replace('{{ATOMIC_WEIGHT}}',atomic_weight_replace)
			);		
		}
		$('#ptable_main').append('<br>');	
	}
	
	
	var lanthanide_html = element_html.replace('{{CLASS}}','element');


	// Now make lanthanides and actinides
	// Lanthanides are elements 57-70 (subtract one for location in elements_list, indexed from zero; i.e., H == 0)
	// Actinides are elements 89-103 (subtract one...)
	var min = 56, max =  70; 
	while (1){
		for ( el = min; el < max; el++){
			$('#ptable_lanthanides').append( 
				lanthanide_html
					.replace('{{ATOMIC_NUM}}',	elements_list[el].atomic_num)
					.replace('{{EL_SYMBOL}}',	elements_list[el].symbol ) 	
					.replace('{{ATOMIC_WEIGHT}}', Math.round(elements_list[el].atomic_weight,4) )				
			);
		}		
		if ( max == 70 ){
			$('#ptable_lanthanides').append('<br>');
			min = 88;
			max = 102;
		}else{
			break;
		}
	}
}

$(document).ready(function(){
	make_ptable();
});

