/**
 * BinarySearch é um algoritmo de busca que encontra a posição de um valor em um
 * array ordenado.
 * Ela funciona dividindo repetidamente pela metade a porção da lista que deve
 * conter o item,
 * até reduzir as localizações possíveis a apenas uma.
 */
public class BinarySearch {
    public static void main(String[] args) {
        int[] vetor = {
                732, 9455, 5255, 3383, 1077, 2695, 7484, 2728, 2824, 2687, 8297, 2548, 8679, 3022, 841, 7658, 5948,
                8015, 9921, 1112, 2501, 8680, 4331, 7030, 7035, 409, 3447, 8975, 1028, 82, 7570, 1124, 8006, 4391, 7798,
                2568, 1874, 7368, 7713, 415, 8061, 4807, 9554, 956, 365, 2041, 1594, 3851, 1799, 8348, 6358, 4386, 8977,
                5838, 5439, 1732, 4622, 9462, 3576, 174, 4079, 2136, 72, 444, 6233, 415, 6585, 8846, 2103, 9815, 1897,
                2600, 4396, 6330, 96, 1669, 6308, 5917, 2775, 5230, 5077, 3356, 4077, 5647, 8434, 4677, 7909, 9687,
                1389, 7373, 4499, 5099, 4228, 1495, 2923, 5410, 9455, 433, 622, 2154, 9286, 8891, 62, 5458, 697, 7388,
                9810, 8083, 8547, 9378, 3183, 5564, 5934, 7371, 7641, 1010, 8478, 445, 3873, 9490, 3798, 7639, 4501,
                7692, 5785, 7441, 2053, 7208, 452, 5504, 949, 8505, 6978, 9281, 4282, 4416, 7093, 3151, 6155, 9947,
                4955, 6392, 782, 6879, 2646, 8, 1476, 3127, 6055, 1162, 802, 3106, 1000, 7009, 2757, 7918, 870, 5670,
                7611, 6164, 7803, 8519, 8290, 2865, 9832, 8410, 2568, 2354, 8105, 8085, 485, 4479, 9397, 7330, 3216,
                7575, 3697, 879, 6644, 1886, 5609, 4763, 5058, 723, 2396, 2387, 9458, 3241, 2120, 1588, 8381, 4240,
                5749, 5919, 4231, 9394, 1311, 7344, 1290, 8685, 7571, 4366, 4806, 6881, 9113, 1266, 9918, 6375, 5468,
                6092, 7407, 8482, 1988, 2326, 6510, 9865, 6020, 1812, 3830, 5716, 306, 661, 6287, 4180, 5795, 6527,
                4388, 6763, 5334, 5993, 9327, 3880, 4408, 5997, 9372, 9192, 2914, 9531, 5132, 7292, 9107, 8778, 4006,
                728, 3405, 5896, 3598, 9161, 8989, 877, 3068, 1435, 1638, 9869, 3864, 64, 1412, 1545, 725, 2473, 9253,
                938, 2302, 4070, 336, 1094, 9557, 4932, 4351, 6001, 790, 6268, 8012, 6380, 1424, 1602, 2084, 3291, 6436,
                922, 1024, 625, 6283, 3034, 2572, 5689, 5560, 1736, 5817, 1189, 1714, 1408, 6325, 3895, 8680, 4427,
                6296, 6085, 8100, 4093, 2670, 5954, 7615, 2367, 7813, 192, 225, 7727, 1734, 4215, 2794, 2654, 9434,
                9902, 9471, 6651, 7067, 2292, 1982, 4608, 2794, 6703, 1583, 9371, 6869, 4301, 6557, 5319, 8276, 562,
                1308, 8216, 138, 2583, 9543, 2509, 5239, 6009, 3689, 2460, 1579, 5360, 4228, 1737, 7735, 1829, 3768,
                3010, 7777, 8009, 9153, 4924, 7135, 9143, 7124, 826, 8928, 9477, 576, 1026, 7514, 4850, 2405, 4202,
                1800, 1455, 234, 9225, 3990, 5292, 1375, 5305, 3413, 8867, 8838, 2187, 3442, 7007, 5277, 52, 6764, 2872,
                7959, 9054, 7221, 4735, 5289, 2476, 3034, 8594, 2682, 216, 9882, 5150, 6971, 6012, 480, 4148, 7296,
                5414, 3016, 7205, 1331, 816, 6537, 2246, 6841, 321, 9985, 6044, 304, 4968, 1115, 8963, 7413, 8288, 6381,
                6623, 8382, 768, 5788, 451, 3857, 9852, 8850, 8232, 8473, 23, 7047, 3543, 3738, 4616, 8430, 7348, 6331,
                171, 3971, 2943, 7475, 6379, 3934, 4042, 1367, 3144, 4326, 9386, 1497, 6290, 5593, 9142, 9807, 551,
                7951, 574, 6418, 3609, 68, 3821, 5440, 9023, 5198,
                1200, 2719, 24, 7914, 9675, 7059, 5201, 4409, 2362, 7377, 9109, 7233, 4595, 7605, 6224, 3335, 2764,
                8027, 4349, 7102, 7515, 6313, 9714, 7461, 7574, 1606, 9247, 6979, 248, 5688, 3974, 7090, 7321, 3426,
                9986, 4419, 2792, 127, 6917, 2163, 7909, 1621, 3091, 9105, 1288, 851, 4110, 3655, 4746, 1657, 3717,
                6070, 8511, 9838, 9781, 7875, 1196, 7369, 9088, 9138, 8915, 6267, 9937, 1006, 6733, 6464, 5831, 2627,
                3791, 1732, 4881, 2304, 6351, 2867, 4675, 8490, 8641, 6497, 1349, 5102, 4765, 495, 467, 893, 78, 3422,
                8382, 9034, 8818, 5280, 1597, 9090, 7978, 6285, 6816, 5269, 3237, 4629, 1469, 2061, 6916, 5003, 5259,
                9760, 7884, 4887, 3228, 1990, 1487, 5660, 6161, 4210, 3751, 5673, 665, 1148, 3588, 4887, 1583, 4960,
                2338, 4417, 3876, 8942, 6204, 7404, 1943, 6686, 6877, 8700, 3127, 1533, 2059, 2297, 9748, 8052, 3752,
                2648, 4114, 758, 8826, 5085, 3573, 1366, 6993, 4038, 1426, 7244, 6693, 5153, 5295, 2560, 4768, 2748,
                7828, 108, 5313, 5573, 2590, 2425, 8075, 3079, 3538, 8859, 1529, 2633, 2780, 6581, 6714, 1201, 3360,
                9460, 1522, 2251, 4764, 6339, 6269, 9232, 4816, 6163, 8833, 5299, 946, 7992, 7268, 7059, 2118, 1933,
                7314, 7314, 6382, 9209, 2871, 4807, 767, 8018, 7873, 9048, 9044, 5842, 4145, 5761, 8475, 2258, 964,
                1131, 3702, 724, 3779, 1523, 3367, 8606, 7830, 5006, 9043, 7270, 2974, 4443, 6636, 3539, 2692, 3269,
                5683, 5448, 4361, 4241, 9877, 5017, 1852, 6386, 8517, 3060, 4421, 2082, 4171, 8049, 6032, 9047, 3186,
                7003, 7985, 437, 9192, 6186, 7604, 2644, 4291, 9304, 7831, 5036, 3657, 2321, 3134, 8029, 8373, 5565,
                8162, 4853, 6429, 4998, 1094, 7339, 7737, 1128, 2779, 7310, 3439, 3039, 9648, 302, 1234, 9965, 2378,
                1507, 6614, 628, 4398, 6462, 6450, 9941, 4119, 1695, 3352, 9218, 843, 6296, 4512, 4932, 1394, 9402,
                5871, 464, 4530, 9059, 6935, 6729, 53, 748, 1584, 2762, 1154, 994, 8754, 2551, 5757, 7952, 832, 7055,
                6600, 7264, 8652, 5177, 5493, 7535, 3080, 1509, 6823, 406, 234, 3625, 897, 7150, 2854, 9546, 1293, 5456,
                30, 8057, 1987, 9487, 9622, 3978, 1383, 7815, 1062, 2749, 1902, 8497, 571, 2891, 5567, 3505, 2273,
                5290, 8234, 6055, 5041, 5181, 5394, 8311, 9287, 8366, 6936, 9937, 1153, 3221, 3459, 2978, 2387, 8204,
                5539, 4055, 34, 9964, 1682, 5348, 2183, 766, 5227, 2390, 2188, 6362, 1916, 2406, 8626, 9027, 2444, 7468,
                9904, 609, 6488, 3572, 9417, 6291, 2397, 9108, 1920, 3583, 2269, 1480, 7283, 8719, 8477, 7517, 5003,
                3919, 1509, 5010, 9233, 113, 4155, 6591, 8845, 9851, 2337, 4442, 6466, 339, 1261, 7071, 1426, 8826,
                7437, 9262, 2004, 9761, 8873, 126, 9483, 3737, 986, 2452, 946, 4536, 2986, 3287, 3442, 5296, 2321, 326,
                1241, 6592, 1241, 7888, 412, 9221, 4009, 1303, 3770, 7665, 1216, 6331, 9586, 3782, 838, 446, 570, 196,
                7082, 3129, 4245, 1052, 336, 7569, 2713, 7567, 3962, 3035, 8539, 9674, 2798, 9721, 6220, 4272, 9272,
                3751, 5021, 660, 5595, 1828, 3313, 999, 9235, 7431, 5408, 3626, 1062, 8246, 920, 1928, 1589, 6568, 1869,
                7147, 2784, 815, 5042, 3660, 1928, 1581, 8222, 2403, 8244, 7434, 9328, 9522, 453, 55, 3832, 784, 7745,
                7216, 6627, 2795, 4758, 194, 9928, 844, 7543, 8558, 388, 6693, 2207, 2284, 4206, 6781, 7199, 7552, 956,
                1801, 1681, 6711, 9010, 3563, 8656, 1510, 168, 3347, 9620, 2546, 3556, 5515, 8617, 5928, 7303, 1003,
                5589, 6461, 2703, 6776, 7353, 2679, 9715, 2894, 785, 4459, 3661, 8583, 6131, 687, 7132, 5906, 689, 795,
                2753, 3695, 1481, 7003, 6818, 7188, 6637, 9109, 1530, 8131, 1030, 9770, 4632, 9919, 5718, 9574, 3448,
                4029, 6211, 3191, 2732, 6671, 900, 4437, 7143, 1987, 6940, 356, 8388, 8996, 2696, 39, 9396, 2740, 4327,
                6251, 2474, 9905, 2538, 4489, 5608, 7001, 5770, 9256, 457, 8499, 5832, 1616, 8840, 496, 576, 7747, 9413,
                2625, 2356, 4347, 5945, 6424, 8493, 6449, 6503, 5124, 2631, 6209, 2842, 3132, 1358, 3794, 4262, 3464,
                3930, 6331, 4260, 5151, 1436, 8770, 9137, 4246, 869, 3566, 9887, 4343, 5373, 5055, 8553, 7638, 4889,
                5390, 4172, 1986, 68, 7454, 3994, 9303, 7489, 6025, 6208, 1129, 5399, 1912, 4697, 5712, 7270, 8043,
                8890, 2276, 6362, 8833, 7044, 2011, 5944, 163, 2629, 8988, 8678, 6252, 2971, 3027, 9837, 2056, 2960,
                2519, 8220, 6592, 2969, 3368, 5952, 4984, 2553, 2490, 9565, 9426, 2020, 1619, 6476, 6998, 1990, 3248,
                1267, 1716, 5430, 3091, 4840, 4781, 1283, 3790, 9856, 171, 1455, 5180, 7741, 2708, 4999, 8884, 9595,
                6315, 923, 8522, 6058, 2075, 3580, 1321, 4023, 2289, 7846, 5796, 6062, 9663, 8893, 2289, 183, 632, 3967,
                7439, 1312, 9174, 3902, 3747, 4977, 9899, 1821, 4583, 9357, 7837, 9120, 8140, 498, 2074, 3587, 7160,
                8552, 2177, 6424, 351, 5450, 3571, 4269, 4785, 9502, 6766, 4001, 3877, 5459, 8113, 7700, 1175, 2896,
                4207, 3142, 3221, 7982, 3966, 3852, 4639, 9227, 7139, 7927, 5437, 4405, 9665, 4778, 7, 3758, 4906, 3238,
                9073, 8320, 5852, 3345, 7919, 5032, 6935, 4776, 6966, 2277, 6911, 2331, 3592, 3629, 1335, 7422, 933,
                8386, 4552, 4503, 5086, 5855, 3877,
                557, 184, 8273, 4156, 6501, 3275, 5378, 6263, 9436, 8631, 4574, 2731, 1711, 7758, 1794, 4443, 2624,
                8348, 2339, 8362, 5421, 3329, 6010, 3646, 9977, 4852, 2849, 1792, 9538, 9991, 7100, 3751, 5729, 8797,
                4030, 7348, 1403, 4589, 1371, 8519, 297, 7421, 5990, 4614, 2215, 738, 3033, 4662, 2268, 213, 4468, 7402,
                7007, 511, 4336, 6748, 9969, 9617, 797, 5294, 8396, 2866, 1267, 8268, 3122, 9418, 6862, 5167, 6476,
                3745, 301, 650, 2026, 3658, 6433, 2264, 2436, 6266, 5601, 6614, 5450, 6505, 5201, 4762, 8404, 1051,
                1798, 8820, 1846, 2592, 9164, 2422, 4717, 8751, 9352, 1478, 1704, 5517, 8036, 7036, 8846, 1497, 4804,
                4142, 5023, 1346, 7349, 7803, 706, 1935, 9885, 6964, 7551, 6109, 6523, 4429, 592, 4924, 2139, 3645,
                3346, 1250, 5424, 1782, 2180, 785, 6745, 7235, 2919, 9134, 8609, 3638, 9650, 1720, 8428, 8108, 8284,
                8816, 4593, 2158, 8001, 3145, 5614, 254, 8595, 1149, 5203, 5977, 5052, 1134, 5905, 2802, 6473, 1221,
                6568, 134, 2104, 1070, 4903, 8570, 5256, 980, 2039, 9512, 6582, 9858, 2109, 9958, 474, 7121, 1519, 1002,
                8482, 6912, 9170, 6142, 7272, 1240, 9936, 4634, 3400, 5316, 1446, 5242, 207, 3688, 465, 3613, 9651,
                2936, 1038, 2125, 9589, 5329, 8538, 1472, 5325, 6827, 564, 2416, 1341, 1463, 2474, 3618, 5754, 7444,
                6172, 1141, 4534, 5795, 5950, 8828, 445, 3958, 6283, 6540, 2168, 9855, 6837, 3587, 8921, 3309, 9391,
                7825, 8892, 25, 3074, 784, 6889, 5894, 1796, 3025, 8923, 6628, 6148, 5846, 4756, 1198, 1646, 5321, 2199,
                2033, 1205, 3699, 4315, 447, 9036, 9528, 6557, 2398, 9269, 2748, 1636, 9897, 849, 9164, 3056, 8842, 848,
                5057, 6741, 445, 2584, 649, 9829, 6423, 5962, 5605, 9859, 5032, 5390, 1953, 4973, 7244, 9502, 3548,
                9745, 8, 7219, 8609, 2500, 8556, 138, 4675, 1689, 6418, 6621, 6715, 4039, 4295, 2377, 4772, 666, 1471,
                4297, 6344, 7096, 3119,
                4042, 4857, 8018, 1329, 2424, 4262, 3031, 42, 509, 3610, 4540, 4454, 3674, 1935, 5716, 8007, 3698, 1816,
                3319, 2412, 1890, 2779, 7719,
                6507, 5259, 9773, 3454, 5264, 4446, 3849, 4878, 9685, 5246, 5621, 841, 7200, 9537, 4366, 5418, 691,
                3677, 9537, 2142, 7324, 267, 2134,
                56, 3065, 664, 539, 2848, 3834, 1885, 9178, 3510, 9468, 643, 6174, 2355, 290, 4912, 5933, 6760, 8073,
                6482, 1171, 24, 3173, 3809, 5126, 5947, 2460, 7498, 1101, 3756, 5641, 5727, 4147, 3428, 8239, 308, 2375,
                1394, 7574, 2298, 1275, 8208, 3843, 4013, 6873, 7388, 685, 1115, 8036, 1681, 1458, 668, 3713, 9033,
                5656, 6646, 4008, 4110, 6627, 4184, 7962, 4666, 2617, 5104, 4567, 9375, 9720, 1608, 5347, 6797, 6818,
                2753, 8990, 9731, 2412, 7376, 4499, 6150, 1071, 2414, 2615, 2047, 9824, 6631, 7524, 9561, 1848, 1144,
                9180, 170, 8686, 6103, 2447,
                986, 3501, 7423, 6164, 4559, 1109, 7750, 6526, 1261, 9373, 6300, 1737, 2950, 7701, 2469, 6858, 5762,
                5172, 6326, 2749, 6990, 9156, 9983, 5264, 621, 7027, 3377, 7512, 2692, 3703, 8466, 9613, 3547, 4642,
                1721, 2287, 399, 4934, 1427, 5816, 4321, 7215, 1423, 3882, 2336, 3367, 9552, 9821, 1717, 694, 1125,
                6676, 60, 8629, 2944, 498, 8416, 9432, 1936, 1472, 5667, 7653, 8387, 3311, 4920, 6403, 4083, 733, 9727,
                9384, 5356, 2660, 4284, 803, 1276, 4752, 9971, 2912, 4379, 9886, 8636, 4538, 8361, 4688, 4848, 233,
                5071, 4014, 8613, 2879, 8582, 378, 4758, 3398, 1475, 4621, 7671, 2042, 7062, 7201, 8195, 7071, 2246,
                3836, 4001, 7685, 4900, 6701, 4658, 1534, 8377, 9594, 697, 7473, 8739, 9032, 5837, 9337, 3347, 1343,
                1530, 6757, 7584, 3804, 5496, 1109, 5770, 2781, 2440, 447, 8338, 2634, 6195, 2429, 9953, 7824, 2688,
                5057, 6615, 2949, 5030, 3469, 7535, 6345, 7142, 7447, 5449, 2121, 7901, 1540, 1701, 3365, 6716, 8030,
                2336, 4108, 3439, 723
        };

        // Ordenando usando o Bubble Sort
        for (int i = 0; i < vetor.length - 1; i++) {
            for (int j = 0; j < vetor.length - 1 - i; j++) {
                if (vetor[j] > vetor[j + 1]) {
                    if (vetor[j] > vetor[j + 1]) {
                        int aux = vetor[j];
                        vetor[j] = vetor[j + 1];
                        vetor[j + 1] = aux;
                    }
                }
            }
        }

        // Buscando o elemento com Binary Search
        int index = -1;
        int min = 0;
        int max = vetor.length - 1;
        int valorProcurado = 2548;

        while (min <= max) {
            int mid = min  + ((max - min) / 2);
            if (vetor[mid] < valorProcurado) {
                min = mid + 1;
            } else if (vetor[mid] > valorProcurado) {
                max = mid - 1;
            } else if (vetor[mid] == valorProcurado) {
                index = mid;
                break;
            }
        }
        
        if (index < 0) {
            System.out.println("Valor não encontrado");
        } else {    
            System.out.printf("Valor foi encontrado na posição: %d", index);
        }
    }
}
