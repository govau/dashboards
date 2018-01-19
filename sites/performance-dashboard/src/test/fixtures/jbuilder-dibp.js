// Last updated: Sun Jan 08 2017 09:23:30 GMT+1100 (AEDT)
export default {
  "currentUser": {"id": 1, "email": "dummy@gmail.com", "token": "HDSFGHJSFD"},
  "dashboards": [{
    "id": 2,
    "name": "Australian Citizenship Appointment Booking Service",
    "description": "Description",
    "notes": [{
      "title": "Where is this information from?",
      "body": "Department of Immigration and Border Protection."
    }, {
      "title": "What is Australian Citizenship Appointment Booking Service?",
      "body": "The Australian Citizenship Appointment Booking Service makes it quicker, easier and more convenient for users to reschedule a citizenship test appointment. Prior to the introduction of the online service, users were only able to change their appointment by calling the Department. The public beta release of the service is currently available in Melbourne, Victoria."
    }, {
      "title": "User satisfaction",
      "body": "User satisfaction measures the percentage of users who responded \"satisfied\" and \"very satisfied\" with the appointment booking service using the feedback kiosks located in the Department’s citizenship areas."
    }, {"title": "Cost per transaction", "body": "This data is not available."}, {
      "title": "Digital take-up",
      "body": "Digital take-up measures the number of users who had an appointment booked using the new service as a percentage of all appointments that have been made Australia-wide."
    }, {
      "title": "Completion rate",
      "body": "Completion rate measures the number of users who were able to use the digital service without having to contact the Department for assistance when rescheduling their appointment."
    }],
    "url": "https://www.border.gov.au/",
    "target_users": "Users",
    "display_hero": true,
    "display_kpis": true,
    "published_at": "2017-01-07T05:07:55.943Z"
  }],
  "widgets": [{
    "id": 18,
    "dashboard_id": 2,
    "row": 1,
    "pos": 0,
    "name": "User satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:55.978Z",
    "datasets": [41]
  }, {
    "id": 19,
    "dashboard_id": 2,
    "row": 1,
    "pos": 1,
    "name": "Cost per transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [42]
  }, {
    "id": 20,
    "dashboard_id": 2,
    "row": 1,
    "pos": 2,
    "name": "Digital take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:56.039Z",
    "datasets": [44]
  }, {
    "id": 21,
    "dashboard_id": 2,
    "row": 1,
    "pos": 3,
    "name": "Completion rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:56.009Z",
    "datasets": [43]
  }, {
    "id": 22,
    "dashboard_id": 2,
    "row": 2,
    "pos": 1,
    "name": "Devices used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of devices used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:56.070Z",
    "datasets": [45, 46, 47]
  }, {
    "id": 23,
    "dashboard_id": 2,
    "row": 3,
    "pos": 0,
    "name": "Browsers used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of browsers used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:56.166Z",
    "datasets": [48, 49, 50, 51, 52]
  }, {
    "id": 24,
    "dashboard_id": 2,
    "row": 3,
    "pos": 1,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "Prior to the digital transformation clients could only reschedule a citizenship test appointment to a more suitable time by calling the Department.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 25,
    "dashboard_id": 2,
    "row": 2,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "The Appointment Booking Service was developed to replace the Department’s existing booking system. User research found that users wanted a more efficient and effective way to reschedule their citizenship test appointment to a time and/or day that better suited them. ",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 26,
    "dashboard_id": 2,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-01-07T05:07:55.978Z",
    "datasets": [41, 42, 44, 43]
  }],
  "datasets": [{
    "id": 1,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:52.239Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 2,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-01-07T05:07:52.242Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 3,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:52.245Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 4,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:52.247Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 5,
    "name": "Chrome",
    "label": "Browser Usage - Chrome",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.249Z",
    "data_updated_at": "2017-01-07T05:07:52.332Z",
    "datapoints": [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  }, {
    "id": 6,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.334Z",
    "data_updated_at": "2017-01-07T05:07:52.378Z",
    "datapoints": [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
  }, {
    "id": 7,
    "name": "Browser Usage - Mozilla",
    "label": "Mozilla",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.381Z",
    "data_updated_at": "2017-01-07T05:07:52.424Z",
    "datapoints": [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23]
  }, {
    "id": 8,
    "name": "Browser Usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.426Z",
    "data_updated_at": "2017-01-07T05:07:52.470Z",
    "datapoints": [44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34]
  }, {
    "id": 9,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.472Z",
    "data_updated_at": "2017-01-07T05:07:52.515Z",
    "datapoints": [55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45]
  }, {
    "id": 10,
    "name": "Web Traffic Source - humanservices.gov.au",
    "label": "humanservices.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.518Z",
    "data_updated_at": "2017-01-07T05:07:52.642Z",
    "datapoints": [86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56]
  }, {
    "id": 11,
    "name": "Web Traffic Source - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.645Z",
    "data_updated_at": "2017-01-07T05:07:52.788Z",
    "datapoints": [117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87]
  }, {
    "id": 12,
    "name": "Web Traffic Source - ato.gov.au",
    "label": "ato.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.791Z",
    "data_updated_at": "2017-01-07T05:07:52.932Z",
    "datapoints": [148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118]
  }, {
    "id": 13,
    "name": "Web Traffic Source - Google",
    "label": "Google",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:52.935Z",
    "data_updated_at": "2017-01-07T05:07:53.095Z",
    "datapoints": [179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149]
  }, {
    "id": 14,
    "name": "Web Traffic Source - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.097Z",
    "data_updated_at": "2017-01-07T05:07:53.242Z",
    "datapoints": [210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180]
  }, {
    "id": 15,
    "name": "Linked Accounts - 1 service",
    "label": "1 service",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.244Z",
    "data_updated_at": "2017-01-07T08:59:56.096Z",
    "datapoints": [1056, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211]
  }, {
    "id": 16,
    "name": "Linked Accounts - 2 services",
    "label": "2 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.325Z",
    "data_updated_at": "2017-01-07T08:59:56.094Z",
    "datapoints": [1055, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232]
  }, {
    "id": 17,
    "name": "Linked Accounts - 3 services",
    "label": "3 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.399Z",
    "data_updated_at": "2017-01-07T08:59:56.092Z",
    "datapoints": [1054, 273, 272, 271, 270, 269, 268, 267, 266, 265, 264, 263, 262, 261, 260, 259, 258, 257, 256, 255, 254, 253]
  }, {
    "id": 18,
    "name": "Linked Accounts - 4 services",
    "label": "4 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.495Z",
    "data_updated_at": "2017-01-07T08:59:56.109Z",
    "datapoints": [1057, 294, 293, 292, 291, 290, 289, 288, 287, 286, 285, 284, 283, 282, 281, 280, 279, 278, 277, 276, 275, 274]
  }, {
    "id": 19,
    "name": "Linked Accounts - 5+ services",
    "label": "5+ services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.571Z",
    "data_updated_at": "2017-01-07T08:59:56.183Z",
    "datapoints": [1058, 315, 314, 313, 312, 311, 310, 309, 308, 307, 306, 305, 304, 303, 302, 301, 300, 299, 298, 297, 296, 295]
  }, {
    "id": 20,
    "name": "New accounts",
    "label": "New accounts",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.680Z",
    "data_updated_at": "2017-01-07T05:11:03.438Z",
    "datapoints": [1046, 336, 335, 334, 333, 332, 331, 330, 329, 328, 327, 326, 325, 324, 323, 322, 321, 320, 319, 318, 317, 316]
  }, {
    "id": 21,
    "name": "Sign in per account",
    "label": "Sign in per account",
    "units": "n",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:53.758Z",
    "data_updated_at": "2017-01-07T05:07:53.828Z",
    "datapoints": [356, 355, 354, 353, 352, 351, 350, 349, 348, 347, 346, 345, 344, 343, 342, 341, 340, 339, 338, 337]
  }, {
    "id": 22,
    "name": "Visits to member services",
    "label": "Visits to member services",
    "units": "n",
    "notes": "The average number of member services a user visits during sign-in",
    "updated_at": "2017-01-07T05:07:53.830Z",
    "data_updated_at": "2017-01-07T05:07:53.905Z",
    "datapoints": [377, 376, 375, 374, 373, 372, 371, 370, 369, 368, 367, 366, 365, 364, 363, 362, 361, 360, 359, 358, 357]
  }, {
    "id": 23,
    "name": "Total accounts",
    "label": "Total accounts",
    "units": "i",
    "notes": "The total number of myGov accounts held be all users",
    "updated_at": "2017-01-07T05:07:53.907Z",
    "data_updated_at": "2017-01-07T05:19:41.992Z",
    "datapoints": [1053, 420, 419, 418, 417, 416, 415, 414, 413, 412, 411, 410, 409, 408, 407, 406, 405, 404, 403, 402, 401, 400, 399, 398, 397, 396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 385, 384, 383, 382, 381, 380, 379, 378]
  }, {
    "id": 24,
    "name": "Links by member service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.063Z",
    "data_updated_at": "2017-01-07T05:18:48.732Z",
    "datapoints": [1047, 441, 440, 439, 438, 437, 436, 435, 434, 433, 432, 431, 430, 429, 428, 427, 426, 425, 424, 423, 422, 421]
  }, {
    "id": 25,
    "name": "Links by member service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.150Z",
    "data_updated_at": "2017-01-07T05:18:48.897Z",
    "datapoints": [1049, 462, 461, 460, 459, 458, 457, 456, 455, 454, 453, 452, 451, 450, 449, 448, 447, 446, 445, 444, 443, 442]
  }, {
    "id": 26,
    "name": "Links by member service - CSA",
    "label": "CSA",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.231Z",
    "data_updated_at": "2017-01-07T05:18:48.913Z",
    "datapoints": [1051, 483, 482, 481, 480, 479, 478, 477, 476, 475, 474, 473, 472, 471, 470, 469, 468, 467, 466, 465, 464, 463]
  }, {
    "id": 27,
    "name": "Links by member service - MyHealth",
    "label": "MyHealth",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.315Z",
    "data_updated_at": "2017-01-07T05:18:48.877Z",
    "datapoints": [1048, 504, 503, 502, 501, 500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490, 489, 488, 487, 486, 485, 484]
  }, {
    "id": 28,
    "name": "Links by member service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.403Z",
    "data_updated_at": "2017-01-07T05:18:48.911Z",
    "datapoints": [1050, 525, 524, 523, 522, 521, 520, 519, 518, 517, 516, 515, 514, 513, 512, 511, 510, 509, 508, 507, 506, 505]
  }, {
    "id": 29,
    "name": "Links by member service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes DVA, NDIS, JobSearch & MyAgedCare",
    "updated_at": "2017-01-07T05:07:54.484Z",
    "data_updated_at": "2017-01-07T05:18:49.098Z",
    "datapoints": [1052, 546, 545, 544, 543, 542, 541, 540, 539, 538, 537, 536, 535, 534, 533, 532, 531, 530, 529, 528, 527, 526]
  }, {
    "id": 31,
    "name": "Device Types - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.652Z",
    "data_updated_at": "2017-01-07T05:07:54.727Z",
    "datapoints": [585, 584, 583, 582, 581, 580, 579, 578, 577, 576, 575, 574, 573, 572, 571, 570, 569, 568, 567, 566, 565]
  }, {
    "id": 32,
    "name": "Device Types - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.729Z",
    "data_updated_at": "2017-01-07T05:07:54.819Z",
    "datapoints": [605, 604, 603, 602, 601, 600, 599, 598, 597, 596, 595, 594, 593, 592, 591, 590, 589, 588, 587, 586]
  }, {
    "id": 33,
    "name": "Device Types - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.821Z",
    "data_updated_at": "2017-01-07T05:07:54.889Z",
    "datapoints": [625, 624, 623, 622, 621, 620, 619, 618, 617, 616, 615, 614, 613, 612, 611, 610, 609, 608, 607, 606]
  }, {
    "id": 34,
    "name": "Navigations by service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.891Z",
    "data_updated_at": "2017-01-07T05:07:54.963Z",
    "datapoints": [646, 645, 644, 643, 642, 641, 640, 639, 638, 637, 636, 635, 634, 633, 632, 631, 630, 629, 628, 627, 626]
  }, {
    "id": 35,
    "name": "Navigations by service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:54.965Z",
    "data_updated_at": "2017-01-07T05:07:55.035Z",
    "datapoints": [667, 666, 665, 664, 663, 662, 661, 660, 659, 658, 657, 656, 655, 654, 653, 652, 651, 650, 649, 648, 647]
  }, {
    "id": 36,
    "name": "Navigations by service - Child Support",
    "label": "Child Support",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:55.037Z",
    "data_updated_at": "2017-01-07T05:07:55.113Z",
    "datapoints": [688, 687, 686, 685, 684, 683, 682, 681, 680, 679, 678, 677, 676, 675, 674, 673, 672, 671, 670, 669, 668]
  }, {
    "id": 37,
    "name": "Navigations by service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:55.117Z",
    "data_updated_at": "2017-01-07T05:07:55.219Z",
    "datapoints": [709, 708, 707, 706, 705, 704, 703, 702, 701, 700, 699, 698, 697, 696, 695, 694, 693, 692, 691, 690, 689]
  }, {
    "id": 38,
    "name": "Navigations by service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes Disability Care, DVA, DSS, PCHER, MyHealth",
    "updated_at": "2017-01-07T05:07:55.222Z",
    "data_updated_at": "2017-01-07T05:07:55.333Z",
    "datapoints": [730, 729, 728, 727, 726, 725, 724, 723, 722, 721, 720, 719, 718, 717, 716, 715, 714, 713, 712, 711, 710]
  }, {
    "id": 41,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:55.947Z",
    "data_updated_at": "2017-01-07T05:07:55.978Z",
    "datapoints": [819, 818, 817, 816, 815, 814, 813, 812]
  }, {
    "id": 42,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-01-07T05:07:55.980Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 43,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:55.982Z",
    "data_updated_at": "2017-01-07T05:07:56.009Z",
    "datapoints": [827, 826, 825, 824, 823, 822, 821, 820]
  }, {
    "id": 44,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.011Z",
    "data_updated_at": "2017-01-07T05:07:56.039Z",
    "datapoints": [835, 834, 833, 832, 831, 830, 829, 828]
  }, {
    "id": 45,
    "name": "Device Usage - Mobile",
    "label": "Mobile",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.041Z",
    "data_updated_at": "2017-01-07T05:07:56.070Z",
    "datapoints": [843, 842, 841, 840, 839, 838, 837, 836]
  }, {
    "id": 46,
    "name": "Device Usage - Tablet",
    "label": "Tablet",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.072Z",
    "data_updated_at": "2017-01-07T05:07:56.104Z",
    "datapoints": [851, 850, 849, 848, 847, 846, 845, 844]
  }, {
    "id": 47,
    "name": "Device Usage - Desktop",
    "label": "Desktop",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.106Z",
    "data_updated_at": "2017-01-07T05:07:56.137Z",
    "datapoints": [859, 858, 857, 856, 855, 854, 853, 852]
  }, {
    "id": 48,
    "name": "Browser Usage - Chrome",
    "label": "Chrome",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.139Z",
    "data_updated_at": "2017-01-07T05:07:56.166Z",
    "datapoints": [867, 866, 865, 864, 863, 862, 861, 860]
  }, {
    "id": 49,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.168Z",
    "data_updated_at": "2017-01-07T05:07:56.200Z",
    "datapoints": [875, 874, 873, 872, 871, 870, 869, 868]
  }, {
    "id": 50,
    "name": "Browser Usage - Firefox",
    "label": "Firefox",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.202Z",
    "data_updated_at": "2017-01-07T05:07:56.230Z",
    "datapoints": [883, 882, 881, 880, 879, 878, 877, 876]
  }, {
    "id": 51,
    "name": "Browser Usage - Internet Explorer",
    "label": "Internet Explorer",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.232Z",
    "data_updated_at": "2017-01-07T05:07:56.259Z",
    "datapoints": [891, 890, 889, 888, 887, 886, 885, 884]
  }, {
    "id": 52,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:56.261Z",
    "data_updated_at": "2017-01-07T05:07:56.289Z",
    "datapoints": [899, 898, 897, 896, 895, 894, 893, 892]
  }, {
    "id": 53,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": "This data is currently unavailable due to....",
    "updated_at": "2017-01-07T05:07:56.441Z",
    "data_updated_at": "2017-01-07T05:07:56.456Z",
    "datapoints": [903, 902, 901, 900]
  }, {
    "id": 54,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "This data is currently unavailable due to....",
    "updated_at": "2017-01-07T05:07:56.458Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 55,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": "The percentage of visitors to the business.gov.au 'A business or a hobby?' page who go on to use the tool. This is calculated by dividing the total number of ..... by the total number of .......",
    "updated_at": "2017-01-07T05:07:56.460Z",
    "data_updated_at": "2017-01-07T05:07:56.474Z",
    "datapoints": [907, 906, 905, 904]
  }, {
    "id": 56,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": "The percentage of users who successfully generate a result after starting the tool. This is calculated by dividing the total number of successfully completed transactions by the total number of started transactions.",
    "updated_at": "2017-01-07T05:07:56.476Z",
    "data_updated_at": "2017-01-07T05:07:56.491Z",
    "datapoints": [911, 910, 909, 908]
  }, {
    "id": 57,
    "name": "Click Through - ABLIS",
    "label": "ABLIS",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.493Z",
    "data_updated_at": "2017-01-07T05:07:56.508Z",
    "datapoints": [915, 914, 913, 912]
  }, {
    "id": 58,
    "name": "Click Through - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.510Z",
    "data_updated_at": "2017-01-07T05:07:56.524Z",
    "datapoints": [919, 918, 917, 916]
  }, {
    "id": 59,
    "name": "Click Through - business.gov.au",
    "label": "business.gov.au",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.526Z",
    "data_updated_at": "2017-01-07T05:07:56.540Z",
    "datapoints": [923, 922, 921, 920]
  }, {
    "id": 60,
    "name": "Click Through - IP Australia",
    "label": "IP Australia",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.542Z",
    "data_updated_at": "2017-01-07T05:07:56.557Z",
    "datapoints": [927, 926, 925, 924]
  }, {
    "id": 61,
    "name": "Click Through - Other",
    "label": "Other",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.559Z",
    "data_updated_at": "2017-01-07T05:07:56.573Z",
    "datapoints": [931, 930, 929, 928]
  }, {
    "id": 62,
    "name": "Click Through - External sites",
    "label": "External sites",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.575Z",
    "data_updated_at": "2017-01-07T05:07:56.591Z",
    "datapoints": [935, 934, 933, 932]
  }, {
    "id": 63,
    "name": "Click Through - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.593Z",
    "data_updated_at": "2017-01-07T05:07:56.614Z",
    "datapoints": [939, 938, 937, 936]
  }, {
    "id": 64,
    "name": "Help sought - No help required",
    "label": "No help required",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.618Z",
    "data_updated_at": "2017-01-07T05:07:56.633Z",
    "datapoints": [943, 942, 941, 940]
  }, {
    "id": 65,
    "name": "Help sought - Help required",
    "label": "Help required",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.635Z",
    "data_updated_at": "2017-01-07T05:07:56.650Z",
    "datapoints": [947, 946, 945, 944]
  }, {
    "id": 66,
    "name": "Device usage - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.652Z",
    "data_updated_at": "2017-01-07T05:07:56.667Z",
    "datapoints": [951, 950, 949, 948]
  }, {
    "id": 67,
    "name": "Device usage - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.670Z",
    "data_updated_at": "2017-01-07T05:07:56.695Z",
    "datapoints": [955, 954, 953, 952]
  }, {
    "id": 68,
    "name": "Device usage - Tablet",
    "label": "Tablet",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.698Z",
    "data_updated_at": "2017-01-07T05:07:56.718Z",
    "datapoints": [959, 958, 957, 956]
  }, {
    "id": 69,
    "name": "Device usage - Chrome",
    "label": "Chrome",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.721Z",
    "data_updated_at": "2017-01-07T05:07:56.748Z",
    "datapoints": [963, 962, 961, 960]
  }, {
    "id": 70,
    "name": "Broswer usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.750Z",
    "data_updated_at": "2017-01-07T05:07:56.764Z",
    "datapoints": [967, 966, 965, 964]
  }, {
    "id": 71,
    "name": "Broswer usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.767Z",
    "data_updated_at": "2017-01-07T05:07:56.781Z",
    "datapoints": [971, 970, 969, 968]
  }, {
    "id": 72,
    "name": "Broswer usage - Firefox",
    "label": "Firefox",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.783Z",
    "data_updated_at": "2017-01-07T05:07:56.820Z",
    "datapoints": [975, 974, 973, 972]
  }, {
    "id": 73,
    "name": "Broswer usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "",
    "updated_at": "2017-01-07T05:07:56.824Z",
    "data_updated_at": "2017-01-07T05:07:56.850Z",
    "datapoints": [979, 978, 977, 976]
  }, {
    "id": 74,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": "We do not have this data at the moment because we are....",
    "updated_at": "2017-01-07T05:07:57.049Z",
    "data_updated_at": "2017-01-07T05:07:57.055Z",
    "datapoints": [980]
  }, {
    "id": 75,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "We do not have this data at the moment because we are....",
    "updated_at": "2017-01-07T05:07:57.057Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 76,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": "We do not have this data at the moment because we are...",
    "updated_at": "2017-01-07T05:07:57.059Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 77,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": "Digital take-up measures the percentage of import permits that are available in the Permit Verification Service.",
    "updated_at": "2017-01-07T05:07:57.061Z",
    "data_updated_at": "2017-01-07T05:07:57.087Z",
    "datapoints": [987, 986, 985, 984, 983, 982, 981]
  }, {
    "id": 78,
    "name": "Time to clear",
    "label": "Time to clear",
    "units": "i",
    "notes": "This shows the average time taken to clear a permit using the Permit Verifcation Service.",
    "updated_at": "2017-01-07T05:07:57.089Z",
    "data_updated_at": "2017-01-07T05:07:57.117Z",
    "datapoints": [993, 992, 991, 990, 989, 988]
  }, {
    "id": 79,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.234Z",
    "data_updated_at": "2017-01-07T05:07:57.239Z",
    "datapoints": [994]
  }, {
    "id": 80,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-01-07T05:07:57.241Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 81,
    "name": "Number of Newborns Enrolled",
    "label": "Enrolled",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.243Z",
    "data_updated_at": "2017-01-07T05:07:57.260Z",
    "datapoints": [999, 998, 997, 996, 995]
  }, {
    "id": 83,
    "name": "Total number of newborns by month",
    "label": "Total",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.268Z",
    "data_updated_at": "2017-01-07T05:07:57.287Z",
    "datapoints": [1005, 1004, 1003, 1002, 1001]
  }, {
    "id": 84,
    "name": "Number of participating mothers",
    "label": "Participants",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.289Z",
    "data_updated_at": "2017-01-07T05:07:57.306Z",
    "datapoints": [1010, 1009, 1008, 1007, 1006]
  }, {
    "id": 85,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.308Z",
    "data_updated_at": "2017-01-07T05:07:57.326Z",
    "datapoints": [1015, 1014, 1013, 1012, 1011]
  }, {
    "id": 86,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.329Z",
    "data_updated_at": "2017-01-07T05:07:57.346Z",
    "datapoints": [1020, 1019, 1018, 1017, 1016]
  }, {
    "id": 87,
    "name": "Reason unable to enrol - Already enrolled",
    "label": "Already enrolled",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:57.348Z",
    "data_updated_at": "2017-01-07T05:07:57.366Z",
    "datapoints": [1025, 1024, 1023, 1022, 1021]
  }, {
    "id": 88,
    "name": "Reason unable to enrol - Conditional migrant",
    "label": "Conditional migrant",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-07T05:07:57.368Z",
    "data_updated_at": "2017-01-07T05:07:57.386Z",
    "datapoints": [1030, 1029, 1028, 1027, 1026]
  }, {
    "id": 89,
    "name": "Reason unable to enrol - Unable to contact",
    "label": "Unable to contact",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.388Z",
    "data_updated_at": "2017-01-07T05:07:57.406Z",
    "datapoints": [1035, 1034, 1033, 1032, 1031]
  }, {
    "id": 90,
    "name": "Reason unable to enrol - Duplicate enrolment",
    "label": "Duplicate enrolment",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.408Z",
    "data_updated_at": "2017-01-07T05:07:57.426Z",
    "datapoints": [1040, 1039, 1038, 1037, 1036]
  }, {
    "id": 91,
    "name": "Reason unable to enrol - Other",
    "label": "Other",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.428Z",
    "data_updated_at": "2017-01-07T05:07:57.446Z",
    "datapoints": [1045, 1044, 1043, 1042, 1041]
  }, {
    "id": 92,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.584Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 93,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-01-07T05:07:57.586Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 94,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.588Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 95,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-07T05:07:57.591Z",
    "data_updated_at": null,
    "datapoints": []
  }],
  "datapoints": [{
    "id": 11,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.332Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 10, "value": null, "updated_at": "2017-01-07T05:07:52.329Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 9,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.325Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 8, "value": null, "updated_at": "2017-01-07T05:07:52.321Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 7,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.317Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 6, "value": null, "updated_at": "2017-01-07T05:07:52.314Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 5,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.309Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 4, "value": "41.37", "updated_at": "2017-01-07T05:07:52.305Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 3,
    "value": "40.15",
    "updated_at": "2017-01-07T05:07:52.300Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 2, "value": "41.7", "updated_at": "2017-01-07T05:07:52.282Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 1,
    "value": "41.15",
    "updated_at": "2017-01-07T05:07:52.271Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 22, "value": null, "updated_at": "2017-01-07T05:07:52.378Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 21,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.375Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 20, "value": null, "updated_at": "2017-01-07T05:07:52.372Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 19,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.369Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 18, "value": null, "updated_at": "2017-01-07T05:07:52.365Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 17,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.361Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 16, "value": null, "updated_at": "2017-01-07T05:07:52.357Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 15,
    "value": "24.82",
    "updated_at": "2017-01-07T05:07:52.353Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 14, "value": "26.33", "updated_at": "2017-01-07T05:07:52.347Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 13,
    "value": "27.09",
    "updated_at": "2017-01-07T05:07:52.344Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 12, "value": "28.65", "updated_at": "2017-01-07T05:07:52.340Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 33,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.424Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 32, "value": null, "updated_at": "2017-01-07T05:07:52.420Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 31,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.416Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 30, "value": null, "updated_at": "2017-01-07T05:07:52.412Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 29,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.409Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 28, "value": null, "updated_at": "2017-01-07T05:07:52.405Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 27,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.401Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 26, "value": "30.74", "updated_at": "2017-01-07T05:07:52.398Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 25,
    "value": "29.39",
    "updated_at": "2017-01-07T05:07:52.394Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 24, "value": "26.2", "updated_at": "2017-01-07T05:07:52.389Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 23,
    "value": "25.09",
    "updated_at": "2017-01-07T05:07:52.386Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 44, "value": null, "updated_at": "2017-01-07T05:07:52.470Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 43,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.467Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 42, "value": null, "updated_at": "2017-01-07T05:07:52.463Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 41,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.459Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 40, "value": null, "updated_at": "2017-01-07T05:07:52.456Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 39,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.452Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 38, "value": null, "updated_at": "2017-01-07T05:07:52.448Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 37,
    "value": "2.16",
    "updated_at": "2017-01-07T05:07:52.444Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 36, "value": "2.81", "updated_at": "2017-01-07T05:07:52.440Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 35,
    "value": "3.74",
    "updated_at": "2017-01-07T05:07:52.436Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 34, "value": "3.68", "updated_at": "2017-01-07T05:07:52.432Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 55,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.515Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 54, "value": null, "updated_at": "2017-01-07T05:07:52.510Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 53,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.506Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 52, "value": null, "updated_at": "2017-01-07T05:07:52.502Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 51,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.498Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 50, "value": null, "updated_at": "2017-01-07T05:07:52.495Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 49,
    "value": null,
    "updated_at": "2017-01-07T05:07:52.491Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 48, "value": "0.91", "updated_at": "2017-01-07T05:07:52.487Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 47,
    "value": "1.32",
    "updated_at": "2017-01-07T05:07:52.483Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 46, "value": "1.26", "updated_at": "2017-01-07T05:07:52.480Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 45,
    "value": "1.43",
    "updated_at": "2017-01-07T05:07:52.476Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 86, "value": "18.1", "updated_at": "2017-01-07T05:07:52.642Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 85,
    "value": "12.4",
    "updated_at": "2017-01-07T05:07:52.639Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 84, "value": "15.6", "updated_at": "2017-01-07T05:07:52.635Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 83,
    "value": "15.2",
    "updated_at": "2017-01-07T05:07:52.631Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 82, "value": "14.2", "updated_at": "2017-01-07T05:07:52.627Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 81,
    "value": "19.8",
    "updated_at": "2017-01-07T05:07:52.623Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 80, "value": "24.3", "updated_at": "2017-01-07T05:07:52.619Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 79,
    "value": "23.5",
    "updated_at": "2017-01-07T05:07:52.615Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 78, "value": "25.1", "updated_at": "2017-01-07T05:07:52.609Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 77,
    "value": "25.7",
    "updated_at": "2017-01-07T05:07:52.603Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 76, "value": "29.4", "updated_at": "2017-01-07T05:07:52.598Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 75,
    "value": "28.9",
    "updated_at": "2017-01-07T05:07:52.595Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 74, "value": "24.9", "updated_at": "2017-01-07T05:07:52.589Z", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 73,
    "value": "21.3",
    "updated_at": "2017-01-07T05:07:52.585Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 72, "value": "23.5", "updated_at": "2017-01-07T05:07:52.581Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 71,
    "value": "22.2",
    "updated_at": "2017-01-07T05:07:52.578Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 70, "value": "21.1", "updated_at": "2017-01-07T05:07:52.574Z", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 69,
    "value": "35.9",
    "updated_at": "2017-01-07T05:07:52.570Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 68, "value": "36.4", "updated_at": "2017-01-07T05:07:52.567Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 67,
    "value": "31.7",
    "updated_at": "2017-01-07T05:07:52.563Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 66, "value": "41.3", "updated_at": "2017-01-07T05:07:52.560Z", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 65,
    "value": "38.1",
    "updated_at": "2017-01-07T05:07:52.556Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {"id": 64, "value": "33.3", "updated_at": "2017-01-07T05:07:52.553Z", "ts": "2015-01-01 00:00:00.000"}, {
    "id": 63,
    "value": "33.5",
    "updated_at": "2017-01-07T05:07:52.549Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {"id": 62, "value": "29.3", "updated_at": "2017-01-07T05:07:52.546Z", "ts": "2014-11-01 00:00:00.000"}, {
    "id": 61,
    "value": "19.7",
    "updated_at": "2017-01-07T05:07:52.542Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {"id": 60, "value": "22.2", "updated_at": "2017-01-07T05:07:52.538Z", "ts": "2014-09-01 00:00:00.000"}, {
    "id": 59,
    "value": "19.6",
    "updated_at": "2017-01-07T05:07:52.534Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {"id": 58, "value": "17.7", "updated_at": "2017-01-07T05:07:52.530Z", "ts": "2014-07-01 00:00:00.000"}, {
    "id": 57,
    "value": "37.6",
    "updated_at": "2017-01-07T05:07:52.526Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {"id": 56, "value": "40.6", "updated_at": "2017-01-07T05:07:52.523Z", "ts": "2014-05-01 00:00:00.000"}, {
    "id": 117,
    "value": "23.6",
    "updated_at": "2017-01-07T05:07:52.788Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 116,
    "value": "18.3",
    "updated_at": "2017-01-07T05:07:52.784Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 115,
    "value": "21.2",
    "updated_at": "2017-01-07T05:07:52.779Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 114,
    "value": "20.8",
    "updated_at": "2017-01-07T05:07:52.775Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 113,
    "value": "19.9",
    "updated_at": "2017-01-07T05:07:52.771Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 112,
    "value": "24.6",
    "updated_at": "2017-01-07T05:07:52.767Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 111,
    "value": "23.1",
    "updated_at": "2017-01-07T05:07:52.763Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 110,
    "value": "25.1",
    "updated_at": "2017-01-07T05:07:52.759Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 109,
    "value": "23.1",
    "updated_at": "2017-01-07T05:07:52.754Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 108,
    "value": "21.8",
    "updated_at": "2017-01-07T05:07:52.750Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 107,
    "value": "20.4",
    "updated_at": "2017-01-07T05:07:52.745Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 106,
    "value": "20.7",
    "updated_at": "2017-01-07T05:07:52.740Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 105,
    "value": "19.4",
    "updated_at": "2017-01-07T05:07:52.736Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 104,
    "value": "18.2",
    "updated_at": "2017-01-07T05:07:52.731Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 103,
    "value": "17.0",
    "updated_at": "2017-01-07T05:07:52.726Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 102,
    "value": "15.7",
    "updated_at": "2017-01-07T05:07:52.721Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 101,
    "value": "14.5",
    "updated_at": "2017-01-07T05:07:52.717Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 100, "value": "17.1", "updated_at": "2017-01-07T05:07:52.713Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 99,
    "value": "17.7",
    "updated_at": "2017-01-07T05:07:52.708Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 98, "value": "18.0", "updated_at": "2017-01-07T05:07:52.704Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 97,
    "value": "16.7",
    "updated_at": "2017-01-07T05:07:52.697Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 96, "value": "17.9", "updated_at": "2017-01-07T05:07:52.688Z", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 95,
    "value": "19.4",
    "updated_at": "2017-01-07T05:07:52.682Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 94, "value": "21.0", "updated_at": "2017-01-07T05:07:52.678Z", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 93,
    "value": "20.9",
    "updated_at": "2017-01-07T05:07:52.674Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {"id": 92, "value": "22.2", "updated_at": "2017-01-07T05:07:52.668Z", "ts": "2014-10-01 00:00:00.000"}, {
    "id": 91,
    "value": "22.1",
    "updated_at": "2017-01-07T05:07:52.664Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {"id": 90, "value": "22.1", "updated_at": "2017-01-07T05:07:52.660Z", "ts": "2014-08-01 00:00:00.000"}, {
    "id": 89,
    "value": "23.5",
    "updated_at": "2017-01-07T05:07:52.656Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 88, "value": "21.2", "updated_at": "2017-01-07T05:07:52.653Z", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 87,
    "value": "20.4",
    "updated_at": "2017-01-07T05:07:52.649Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 148,
    "value": "7.69",
    "updated_at": "2017-01-07T05:07:52.932Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 147,
    "value": "23.5",
    "updated_at": "2017-01-07T05:07:52.927Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 146,
    "value": "15.7",
    "updated_at": "2017-01-07T05:07:52.922Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 145,
    "value": "15.6",
    "updated_at": "2017-01-07T05:07:52.917Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 144,
    "value": "19.1",
    "updated_at": "2017-01-07T05:07:52.913Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 143, "value": "6.3", "updated_at": "2017-01-07T05:07:52.909Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 142,
    "value": "4.2",
    "updated_at": "2017-01-07T05:07:52.904Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 141, "value": "3.7", "updated_at": "2017-01-07T05:07:52.900Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 140,
    "value": "3.9",
    "updated_at": "2017-01-07T05:07:52.895Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 139, "value": "4.0", "updated_at": "2017-01-07T05:07:52.891Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 138,
    "value": "3.9",
    "updated_at": "2017-01-07T05:07:52.887Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 137, "value": "4.1", "updated_at": "2017-01-07T05:07:52.882Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 136,
    "value": "6.3",
    "updated_at": "2017-01-07T05:07:52.878Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 135,
    "value": "11.4",
    "updated_at": "2017-01-07T05:07:52.873Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 134, "value": "9.8", "updated_at": "2017-01-07T05:07:52.868Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 133,
    "value": "15.1",
    "updated_at": "2017-01-07T05:07:52.864Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 132,
    "value": "22.3",
    "updated_at": "2017-01-07T05:07:52.860Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 131, "value": "4.6", "updated_at": "2017-01-07T05:07:52.856Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 130,
    "value": "4.0",
    "updated_at": "2017-01-07T05:07:52.852Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 129, "value": "3.7", "updated_at": "2017-01-07T05:07:52.848Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 128,
    "value": "3.1",
    "updated_at": "2017-01-07T05:07:52.843Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 127, "value": "3.9", "updated_at": "2017-01-07T05:07:52.838Z", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 126,
    "value": "3.9",
    "updated_at": "2017-01-07T05:07:52.833Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 125, "value": "4.2", "updated_at": "2017-01-07T05:07:52.828Z", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 124,
    "value": "7.8",
    "updated_at": "2017-01-07T05:07:52.822Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 123,
    "value": "20.5",
    "updated_at": "2017-01-07T05:07:52.818Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 122,
    "value": "16.5",
    "updated_at": "2017-01-07T05:07:52.813Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 121,
    "value": "20.0",
    "updated_at": "2017-01-07T05:07:52.809Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 120,
    "value": "23.8",
    "updated_at": "2017-01-07T05:07:52.805Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 119, "value": "7.9", "updated_at": "2017-01-07T05:07:52.800Z", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 118,
    "value": "5.9",
    "updated_at": "2017-01-07T05:07:52.796Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 179,
    "value": "36.6",
    "updated_at": "2017-01-07T05:07:53.095Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 178,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:53.089Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 177,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:53.084Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 176,
    "value": "35.0",
    "updated_at": "2017-01-07T05:07:53.078Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 175,
    "value": "35.0",
    "updated_at": "2017-01-07T05:07:53.074Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 174,
    "value": "34.8",
    "updated_at": "2017-01-07T05:07:53.069Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 173,
    "value": "33.6",
    "updated_at": "2017-01-07T05:07:53.064Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 172,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:53.057Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 171,
    "value": "33.8",
    "updated_at": "2017-01-07T05:07:53.052Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 170,
    "value": "33.9",
    "updated_at": "2017-01-07T05:07:53.048Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 169,
    "value": "32.7",
    "updated_at": "2017-01-07T05:07:53.043Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 168,
    "value": "33.1",
    "updated_at": "2017-01-07T05:07:53.037Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 167,
    "value": "34.7",
    "updated_at": "2017-01-07T05:07:53.032Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 166,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:53.027Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 165,
    "value": "33.6",
    "updated_at": "2017-01-07T05:07:53.022Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 164,
    "value": "33.7",
    "updated_at": "2017-01-07T05:07:53.017Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 163,
    "value": "31.9",
    "updated_at": "2017-01-07T05:07:53.012Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 162,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:53.007Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 161,
    "value": "29.3",
    "updated_at": "2017-01-07T05:07:53.001Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 160,
    "value": "34.6",
    "updated_at": "2017-01-07T05:07:52.995Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 159,
    "value": "27.4",
    "updated_at": "2017-01-07T05:07:52.988Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 158,
    "value": "26.6",
    "updated_at": "2017-01-07T05:07:52.983Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 157,
    "value": "29.5",
    "updated_at": "2017-01-07T05:07:52.979Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 156,
    "value": "28.1",
    "updated_at": "2017-01-07T05:07:52.974Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 155,
    "value": "28.9",
    "updated_at": "2017-01-07T05:07:52.970Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 154,
    "value": "24.8",
    "updated_at": "2017-01-07T05:07:52.965Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 153,
    "value": "25.1",
    "updated_at": "2017-01-07T05:07:52.961Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 152,
    "value": "24.3",
    "updated_at": "2017-01-07T05:07:52.956Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 151,
    "value": "22.1",
    "updated_at": "2017-01-07T05:07:52.951Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 150,
    "value": "20.5",
    "updated_at": "2017-01-07T05:07:52.947Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 149,
    "value": "20.5",
    "updated_at": "2017-01-07T05:07:52.942Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 210,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:53.242Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 209,
    "value": "12.4",
    "updated_at": "2017-01-07T05:07:53.239Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 208,
    "value": "13.1",
    "updated_at": "2017-01-07T05:07:53.235Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 207,
    "value": "13.5",
    "updated_at": "2017-01-07T05:07:53.232Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 206,
    "value": "11.9",
    "updated_at": "2017-01-07T05:07:53.228Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 205,
    "value": "14.6",
    "updated_at": "2017-01-07T05:07:53.224Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 204,
    "value": "14.8",
    "updated_at": "2017-01-07T05:07:53.220Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 203,
    "value": "13.9",
    "updated_at": "2017-01-07T05:07:53.216Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 202,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:53.211Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 201,
    "value": "14.6",
    "updated_at": "2017-01-07T05:07:53.207Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 200,
    "value": "13.7",
    "updated_at": "2017-01-07T05:07:53.203Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 199,
    "value": "13.1",
    "updated_at": "2017-01-07T05:07:53.199Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 198,
    "value": "14.7",
    "updated_at": "2017-01-07T05:07:53.194Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 197,
    "value": "16.1",
    "updated_at": "2017-01-07T05:07:53.189Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 196,
    "value": "16.1",
    "updated_at": "2017-01-07T05:07:53.183Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 195,
    "value": "13.5",
    "updated_at": "2017-01-07T05:07:53.179Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 194,
    "value": "10.2",
    "updated_at": "2017-01-07T05:07:53.174Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 193,
    "value": "13.4",
    "updated_at": "2017-01-07T05:07:53.168Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 192,
    "value": "12.7",
    "updated_at": "2017-01-07T05:07:53.163Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 191,
    "value": "12.0",
    "updated_at": "2017-01-07T05:07:53.158Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 190,
    "value": "11.9",
    "updated_at": "2017-01-07T05:07:53.154Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 189,
    "value": "13.6",
    "updated_at": "2017-01-07T05:07:53.151Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 188,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:53.147Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 187,
    "value": "13.3",
    "updated_at": "2017-01-07T05:07:53.143Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 186,
    "value": "13.1",
    "updated_at": "2017-01-07T05:07:53.138Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 185,
    "value": "12.9",
    "updated_at": "2017-01-07T05:07:53.133Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 184,
    "value": "14.2",
    "updated_at": "2017-01-07T05:07:53.128Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 183,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:53.123Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 182,
    "value": "12.9",
    "updated_at": "2017-01-07T05:07:53.119Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 181,
    "value": "12.8",
    "updated_at": "2017-01-07T05:07:53.111Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 180,
    "value": "12.7",
    "updated_at": "2017-01-07T05:07:53.104Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 1056,
    "value": "21.0",
    "updated_at": "2017-01-07T08:59:56.096Z",
    "ts": "2016-12-01 00:00:00.000"
  }, {
    "id": 231,
    "value": "54.1",
    "updated_at": "2017-01-07T05:07:53.323Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 230,
    "value": "54.5",
    "updated_at": "2017-01-07T05:07:53.319Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 229,
    "value": "54.9",
    "updated_at": "2017-01-07T05:07:53.316Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 228,
    "value": "55.33",
    "updated_at": "2017-01-07T05:07:53.312Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 227,
    "value": "55.83",
    "updated_at": "2017-01-07T05:07:53.308Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 226,
    "value": "56.5",
    "updated_at": "2017-01-07T05:07:53.305Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 225,
    "value": "56.98",
    "updated_at": "2017-01-07T05:07:53.301Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 224,
    "value": "57.42",
    "updated_at": "2017-01-07T05:07:53.298Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 223,
    "value": "57.84",
    "updated_at": "2017-01-07T05:07:53.295Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 222,
    "value": "58.24",
    "updated_at": "2017-01-07T05:07:53.291Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 221,
    "value": "58.72",
    "updated_at": "2017-01-07T05:07:53.288Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 220,
    "value": "59.21",
    "updated_at": "2017-01-07T05:07:53.284Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 219,
    "value": "59.56",
    "updated_at": "2017-01-07T05:07:53.281Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 218,
    "value": "59.98",
    "updated_at": "2017-01-07T05:07:53.277Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 217,
    "value": "60.54",
    "updated_at": "2017-01-07T05:07:53.273Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 216,
    "value": "61.15",
    "updated_at": "2017-01-07T05:07:53.270Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 215,
    "value": "62.12",
    "updated_at": "2017-01-07T05:07:53.266Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 214,
    "value": "63.66",
    "updated_at": "2017-01-07T05:07:53.257Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 213,
    "value": "64.29",
    "updated_at": "2017-01-07T05:07:53.254Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 212,
    "value": "64.88",
    "updated_at": "2017-01-07T05:07:53.251Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 211,
    "value": "65.51",
    "updated_at": "2017-01-07T05:07:53.248Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1055, "value": null, "updated_at": "2017-01-07T08:59:56.094Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 252,
    "value": "26.02",
    "updated_at": "2017-01-07T05:07:53.398Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 251,
    "value": "25.9",
    "updated_at": "2017-01-07T05:07:53.394Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 250,
    "value": "25.8",
    "updated_at": "2017-01-07T05:07:53.391Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 249,
    "value": "25.77",
    "updated_at": "2017-01-07T05:07:53.388Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 248,
    "value": "25.71",
    "updated_at": "2017-01-07T05:07:53.384Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 247,
    "value": "25.64",
    "updated_at": "2017-01-07T05:07:53.381Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 246,
    "value": "25.52",
    "updated_at": "2017-01-07T05:07:53.378Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 245,
    "value": "25.38",
    "updated_at": "2017-01-07T05:07:53.374Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 244,
    "value": "25.23",
    "updated_at": "2017-01-07T05:07:53.371Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 243,
    "value": "25.09",
    "updated_at": "2017-01-07T05:07:53.368Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 242,
    "value": "24.9",
    "updated_at": "2017-01-07T05:07:53.364Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 241,
    "value": "24.7",
    "updated_at": "2017-01-07T05:07:53.361Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 240,
    "value": "24.55",
    "updated_at": "2017-01-07T05:07:53.357Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 239,
    "value": "24.37",
    "updated_at": "2017-01-07T05:07:53.354Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 238,
    "value": "24.13",
    "updated_at": "2017-01-07T05:07:53.351Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 237,
    "value": "23.85",
    "updated_at": "2017-01-07T05:07:53.347Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 236,
    "value": "23.41",
    "updated_at": "2017-01-07T05:07:53.344Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 235,
    "value": "22.78",
    "updated_at": "2017-01-07T05:07:53.340Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 234,
    "value": "22.46",
    "updated_at": "2017-01-07T05:07:53.337Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 233,
    "value": "22.18",
    "updated_at": "2017-01-07T05:07:53.333Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 232,
    "value": "21.91",
    "updated_at": "2017-01-07T05:07:53.330Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1054, "value": null, "updated_at": "2017-01-07T08:59:56.092Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 273,
    "value": "13.27",
    "updated_at": "2017-01-07T05:07:53.493Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 272,
    "value": "13.1",
    "updated_at": "2017-01-07T05:07:53.489Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 271,
    "value": "13.0",
    "updated_at": "2017-01-07T05:07:53.486Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 270,
    "value": "12.8",
    "updated_at": "2017-01-07T05:07:53.483Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 269,
    "value": "12.58",
    "updated_at": "2017-01-07T05:07:53.479Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 268,
    "value": "12.28",
    "updated_at": "2017-01-07T05:07:53.476Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 267,
    "value": "12.11",
    "updated_at": "2017-01-07T05:07:53.473Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 266,
    "value": "11.94",
    "updated_at": "2017-01-07T05:07:53.469Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 265,
    "value": "11.79",
    "updated_at": "2017-01-07T05:07:53.466Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 264,
    "value": "11.64",
    "updated_at": "2017-01-07T05:07:53.462Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 263,
    "value": "11.48",
    "updated_at": "2017-01-07T05:07:53.458Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 262,
    "value": "11.31",
    "updated_at": "2017-01-07T05:07:53.454Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 261,
    "value": "11.19",
    "updated_at": "2017-01-07T05:07:53.450Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 260,
    "value": "11.04",
    "updated_at": "2017-01-07T05:07:53.441Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 259,
    "value": "10.86",
    "updated_at": "2017-01-07T05:07:53.430Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 258,
    "value": "10.64",
    "updated_at": "2017-01-07T05:07:53.420Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 257,
    "value": "10.31",
    "updated_at": "2017-01-07T05:07:53.417Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 256,
    "value": "9.75",
    "updated_at": "2017-01-07T05:07:53.413Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 255,
    "value": "9.55",
    "updated_at": "2017-01-07T05:07:53.410Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 254,
    "value": "9.36",
    "updated_at": "2017-01-07T05:07:53.407Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 253,
    "value": "9.16",
    "updated_at": "2017-01-07T05:07:53.403Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1057, "value": null, "updated_at": "2017-01-07T08:59:56.109Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 294,
    "value": "4.94",
    "updated_at": "2017-01-07T05:07:53.569Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 293, "value": "4.8", "updated_at": "2017-01-07T05:07:53.565Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 292,
    "value": "4.7",
    "updated_at": "2017-01-07T05:07:53.561Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 291,
    "value": "4.61",
    "updated_at": "2017-01-07T05:07:53.557Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 290,
    "value": "4.46",
    "updated_at": "2017-01-07T05:07:53.553Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 289,
    "value": "4.25",
    "updated_at": "2017-01-07T05:07:53.549Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 288,
    "value": "4.14",
    "updated_at": "2017-01-07T05:07:53.546Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 287,
    "value": "4.05",
    "updated_at": "2017-01-07T05:07:53.542Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 286,
    "value": "3.97",
    "updated_at": "2017-01-07T05:07:53.539Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 285,
    "value": "3.89",
    "updated_at": "2017-01-07T05:07:53.535Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 284,
    "value": "3.81",
    "updated_at": "2017-01-07T05:07:53.532Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 283,
    "value": "3.74",
    "updated_at": "2017-01-07T05:07:53.528Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 282,
    "value": "3.69",
    "updated_at": "2017-01-07T05:07:53.525Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 281,
    "value": "3.63",
    "updated_at": "2017-01-07T05:07:53.522Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 280,
    "value": "3.55",
    "updated_at": "2017-01-07T05:07:53.519Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 279,
    "value": "3.47",
    "updated_at": "2017-01-07T05:07:53.515Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 278,
    "value": "3.32",
    "updated_at": "2017-01-07T05:07:53.512Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 277,
    "value": "3.09",
    "updated_at": "2017-01-07T05:07:53.508Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 276, "value": "3.0", "updated_at": "2017-01-07T05:07:53.505Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 275,
    "value": "2.92",
    "updated_at": "2017-01-07T05:07:53.502Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 274,
    "value": "2.82",
    "updated_at": "2017-01-07T05:07:53.499Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1058, "value": null, "updated_at": "2017-01-07T08:59:56.183Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 315,
    "value": "1.67",
    "updated_at": "2017-01-07T05:07:53.678Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 314, "value": "1.6", "updated_at": "2017-01-07T05:07:53.673Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 313,
    "value": "1.6",
    "updated_at": "2017-01-07T05:07:53.668Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 312, "value": "1.5", "updated_at": "2017-01-07T05:07:53.664Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 311,
    "value": "1.43",
    "updated_at": "2017-01-07T05:07:53.656Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 310,
    "value": "1.32",
    "updated_at": "2017-01-07T05:07:53.647Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 309,
    "value": "1.25",
    "updated_at": "2017-01-07T05:07:53.636Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 308,
    "value": "1.22",
    "updated_at": "2017-01-07T05:07:53.630Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 307,
    "value": "1.18",
    "updated_at": "2017-01-07T05:07:53.627Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 306,
    "value": "1.13",
    "updated_at": "2017-01-07T05:07:53.623Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 305,
    "value": "1.09",
    "updated_at": "2017-01-07T05:07:53.619Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 304,
    "value": "1.05",
    "updated_at": "2017-01-07T05:07:53.613Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 303,
    "value": "1.02",
    "updated_at": "2017-01-07T05:07:53.607Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 302,
    "value": "0.98",
    "updated_at": "2017-01-07T05:07:53.603Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 301,
    "value": "0.93",
    "updated_at": "2017-01-07T05:07:53.599Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 300,
    "value": "0.89",
    "updated_at": "2017-01-07T05:07:53.596Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 299,
    "value": "0.84",
    "updated_at": "2017-01-07T05:07:53.593Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 298,
    "value": "0.73",
    "updated_at": "2017-01-07T05:07:53.587Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 297,
    "value": "0.69",
    "updated_at": "2017-01-07T05:07:53.584Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 296,
    "value": "0.65",
    "updated_at": "2017-01-07T05:07:53.580Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 295,
    "value": "0.6",
    "updated_at": "2017-01-07T05:07:53.575Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 1046,
    "value": "1.0",
    "updated_at": "2017-01-07T05:11:03.438Z",
    "ts": "2016-12-01 00:00:00.000"
  }, {
    "id": 336,
    "value": "166345.0",
    "updated_at": "2017-01-07T05:07:53.756Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 335,
    "value": "225248.0",
    "updated_at": "2017-01-07T05:07:53.753Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 334,
    "value": "201331.0",
    "updated_at": "2017-01-07T05:07:53.749Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 333,
    "value": "288020.0",
    "updated_at": "2017-01-07T05:07:53.746Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 332,
    "value": "387871.0",
    "updated_at": "2017-01-07T05:07:53.743Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 331,
    "value": "155572.0",
    "updated_at": "2017-01-07T05:07:53.739Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 330,
    "value": "152011.0",
    "updated_at": "2017-01-07T05:07:53.736Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 329,
    "value": "141670.0",
    "updated_at": "2017-01-07T05:07:53.732Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 328,
    "value": "148489.0",
    "updated_at": "2017-01-07T05:07:53.729Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 327,
    "value": "176164.0",
    "updated_at": "2017-01-07T05:07:53.725Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 326,
    "value": "158949.0",
    "updated_at": "2017-01-07T05:07:53.722Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 325,
    "value": "130831.0",
    "updated_at": "2017-01-07T05:07:53.718Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 324,
    "value": "154047.0",
    "updated_at": "2017-01-07T05:07:53.715Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 323,
    "value": "257663.0",
    "updated_at": "2017-01-07T05:07:53.711Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 322,
    "value": "223160.0",
    "updated_at": "2017-01-07T05:07:53.708Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 321,
    "value": "334409.0",
    "updated_at": "2017-01-07T05:07:53.704Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 320,
    "value": "494759.0",
    "updated_at": "2017-01-07T05:07:53.700Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 319,
    "value": "166691.0",
    "updated_at": "2017-01-07T05:07:53.697Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 318,
    "value": "164505.0",
    "updated_at": "2017-01-07T05:07:53.693Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 317,
    "value": "154952.0",
    "updated_at": "2017-01-07T05:07:53.688Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 316,
    "value": "182284.0",
    "updated_at": "2017-01-07T05:07:53.684Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 356,
    "value": "0.67",
    "updated_at": "2017-01-07T05:07:53.828Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 355,
    "value": "0.84",
    "updated_at": "2017-01-07T05:07:53.825Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 354,
    "value": "0.75",
    "updated_at": "2017-01-07T05:07:53.821Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 353,
    "value": "1.43",
    "updated_at": "2017-01-07T05:07:53.818Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 352,
    "value": "0.69",
    "updated_at": "2017-01-07T05:07:53.814Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 351,
    "value": "0.58",
    "updated_at": "2017-01-07T05:07:53.811Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 350,
    "value": "0.56",
    "updated_at": "2017-01-07T05:07:53.808Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 349,
    "value": "0.58",
    "updated_at": "2017-01-07T05:07:53.804Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 348, "value": "0.6", "updated_at": "2017-01-07T05:07:53.801Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 347,
    "value": "0.6",
    "updated_at": "2017-01-07T05:07:53.797Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 346,
    "value": "0.54",
    "updated_at": "2017-01-07T05:07:53.794Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 345,
    "value": "0.29",
    "updated_at": "2017-01-07T05:07:53.791Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 344,
    "value": "0.47",
    "updated_at": "2017-01-07T05:07:53.787Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 343,
    "value": "0.41",
    "updated_at": "2017-01-07T05:07:53.783Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 342,
    "value": "0.56",
    "updated_at": "2017-01-07T05:07:53.780Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 341,
    "value": "1.01",
    "updated_at": "2017-01-07T05:07:53.776Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 340,
    "value": "0.32",
    "updated_at": "2017-01-07T05:07:53.773Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 339,
    "value": "0.32",
    "updated_at": "2017-01-07T05:07:53.769Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 338,
    "value": "0.43",
    "updated_at": "2017-01-07T05:07:53.766Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 337,
    "value": "0.41",
    "updated_at": "2017-01-07T05:07:53.763Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 377,
    "value": "1.26",
    "updated_at": "2017-01-07T05:07:53.905Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 376,
    "value": "1.22",
    "updated_at": "2017-01-07T05:07:53.902Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 375,
    "value": "1.26",
    "updated_at": "2017-01-07T05:07:53.898Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 374,
    "value": "1.26",
    "updated_at": "2017-01-07T05:07:53.894Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 373,
    "value": "1.26",
    "updated_at": "2017-01-07T05:07:53.891Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 372,
    "value": "1.23",
    "updated_at": "2017-01-07T05:07:53.887Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 371, "value": "1.2", "updated_at": "2017-01-07T05:07:53.884Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 370,
    "value": "1.24",
    "updated_at": "2017-01-07T05:07:53.880Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 369,
    "value": "1.42",
    "updated_at": "2017-01-07T05:07:53.877Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 368,
    "value": "1.04",
    "updated_at": "2017-01-07T05:07:53.873Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 367,
    "value": "1.35",
    "updated_at": "2017-01-07T05:07:53.870Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 366,
    "value": "1.77",
    "updated_at": "2017-01-07T05:07:53.866Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 365,
    "value": "2.96",
    "updated_at": "2017-01-07T05:07:53.863Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 364,
    "value": "2.02",
    "updated_at": "2017-01-07T05:07:53.859Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 363,
    "value": "2.32",
    "updated_at": "2017-01-07T05:07:53.856Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 362,
    "value": "2.01",
    "updated_at": "2017-01-07T05:07:53.853Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 361,
    "value": "1.99",
    "updated_at": "2017-01-07T05:07:53.849Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 360,
    "value": "1.95",
    "updated_at": "2017-01-07T05:07:53.845Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 359,
    "value": "1.87",
    "updated_at": "2017-01-07T05:07:53.841Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 358,
    "value": "1.31",
    "updated_at": "2017-01-07T05:07:53.838Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 357,
    "value": "1.38",
    "updated_at": "2017-01-07T05:07:53.834Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 1053,
    "value": "9.0",
    "updated_at": "2017-01-07T05:19:41.992Z",
    "ts": "2016-12-01 00:00:00.000"
  }, {
    "id": 420,
    "value": "10835358.0",
    "updated_at": "2017-01-07T05:07:54.061Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 419,
    "value": "10669013.0",
    "updated_at": "2017-01-07T05:07:54.058Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 418,
    "value": "10443765.0",
    "updated_at": "2017-01-07T05:07:54.054Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 417,
    "value": "10242434.0",
    "updated_at": "2017-01-07T05:07:54.051Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 416,
    "value": "9954414.0",
    "updated_at": "2017-01-07T05:07:54.047Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 415,
    "value": "9566543.0",
    "updated_at": "2017-01-07T05:07:54.043Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 414,
    "value": "9410971.0",
    "updated_at": "2017-01-07T05:07:54.039Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 413,
    "value": "9258960.0",
    "updated_at": "2017-01-07T05:07:54.035Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 412,
    "value": "9117290.0",
    "updated_at": "2017-01-07T05:07:54.032Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 411,
    "value": "8968801.0",
    "updated_at": "2017-01-07T05:07:54.029Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 410,
    "value": "8792637.0",
    "updated_at": "2017-01-07T05:07:54.025Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 409,
    "value": "8633688.0",
    "updated_at": "2017-01-07T05:07:54.021Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 408,
    "value": "8502857.0",
    "updated_at": "2017-01-07T05:07:54.018Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 407,
    "value": "8348810.0",
    "updated_at": "2017-01-07T05:07:54.014Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 406,
    "value": "8091147.0",
    "updated_at": "2017-01-07T05:07:54.010Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 405,
    "value": "7867987.0",
    "updated_at": "2017-01-07T05:07:54.007Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 404,
    "value": "7533578.0",
    "updated_at": "2017-01-07T05:07:54.003Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 403,
    "value": "7038819.0",
    "updated_at": "2017-01-07T05:07:54.000Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 402,
    "value": "6872128.0",
    "updated_at": "2017-01-07T05:07:53.996Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 401,
    "value": "6707623.0",
    "updated_at": "2017-01-07T05:07:53.993Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 400,
    "value": "6552671.0",
    "updated_at": "2017-01-07T05:07:53.989Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 399,
    "value": "6370387.0",
    "updated_at": "2017-01-07T05:07:53.986Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 398,
    "value": "6224366.0",
    "updated_at": "2017-01-07T05:07:53.982Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 397,
    "value": "6100676.0",
    "updated_at": "2017-01-07T05:07:53.979Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 396,
    "value": "5999398.0",
    "updated_at": "2017-01-07T05:07:53.975Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 395,
    "value": "5853250.0",
    "updated_at": "2017-01-07T05:07:53.972Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 394,
    "value": "5220496.0",
    "updated_at": "2017-01-07T05:07:53.968Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 393,
    "value": "4775605.0",
    "updated_at": "2017-01-07T05:07:53.965Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 392,
    "value": "4109819.0",
    "updated_at": "2017-01-07T05:07:53.961Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 391,
    "value": "2923386.0",
    "updated_at": "2017-01-07T05:07:53.957Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 390,
    "value": "2752832.0",
    "updated_at": "2017-01-07T05:07:53.954Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 389,
    "value": "2605269.0",
    "updated_at": "2017-01-07T05:07:53.951Z",
    "ts": "2014-04-01 00:00:00.000"
  }, {
    "id": 388,
    "value": "2490089.0",
    "updated_at": "2017-01-07T05:07:53.947Z",
    "ts": "2014-03-01 00:00:00.000"
  }, {
    "id": 387,
    "value": "2373578.0",
    "updated_at": "2017-01-07T05:07:53.944Z",
    "ts": "2014-02-01 00:00:00.000"
  }, {
    "id": 386,
    "value": "2257796.0",
    "updated_at": "2017-01-07T05:07:53.940Z",
    "ts": "2014-01-01 00:00:00.000"
  }, {
    "id": 385,
    "value": "2146290.0",
    "updated_at": "2017-01-07T05:07:53.936Z",
    "ts": "2013-12-01 00:00:00.000"
  }, {
    "id": 384,
    "value": "2062742.0",
    "updated_at": "2017-01-07T05:07:53.933Z",
    "ts": "2013-11-01 00:00:00.000"
  }, {
    "id": 383,
    "value": "1945613.0",
    "updated_at": "2017-01-07T05:07:53.929Z",
    "ts": "2013-10-01 00:00:00.000"
  }, {
    "id": 382,
    "value": "1824121.0",
    "updated_at": "2017-01-07T05:07:53.926Z",
    "ts": "2013-09-01 00:00:00.000"
  }, {
    "id": 381,
    "value": "1740113.0",
    "updated_at": "2017-01-07T05:07:53.922Z",
    "ts": "2013-08-01 00:00:00.000"
  }, {
    "id": 380,
    "value": "1628151.0",
    "updated_at": "2017-01-07T05:07:53.918Z",
    "ts": "2013-07-01 00:00:00.000"
  }, {
    "id": 379,
    "value": "1477505.0",
    "updated_at": "2017-01-07T05:07:53.915Z",
    "ts": "2013-06-01 00:00:00.000"
  }, {
    "id": 378,
    "value": "1368549.0",
    "updated_at": "2017-01-07T05:07:53.911Z",
    "ts": "2013-05-01 00:00:00.000"
  }, {
    "id": 1047,
    "value": "100.0",
    "updated_at": "2017-01-07T05:18:48.732Z",
    "ts": "2016-12-01 00:00:00.000"
  }, {
    "id": 441,
    "value": "28.51",
    "updated_at": "2017-01-07T05:07:54.148Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 440,
    "value": "28.47",
    "updated_at": "2017-01-07T05:07:54.144Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 439,
    "value": "28.48",
    "updated_at": "2017-01-07T05:07:54.138Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 438,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.134Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 437,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.131Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 436,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.127Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 435,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.124Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 434,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.120Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 433,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.113Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 432,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.107Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 431,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.104Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 430,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.100Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 429,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.097Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 428,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.093Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 427,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.088Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 426,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.084Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 425,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.081Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 424,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.078Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 423,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.074Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 422,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.071Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 421,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:54.067Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1049, "value": null, "updated_at": "2017-01-07T05:18:48.897Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 462,
    "value": "27.57",
    "updated_at": "2017-01-07T05:07:54.229Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 461,
    "value": "27.57",
    "updated_at": "2017-01-07T05:07:54.226Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 460,
    "value": "27.67",
    "updated_at": "2017-01-07T05:07:54.222Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 459,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.219Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 458,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.215Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 457,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.211Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 456,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.208Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 455,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.204Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 454,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.201Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 453,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.197Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 452,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.193Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 451,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:54.188Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 450,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:54.184Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 449,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:54.181Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 448,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:54.177Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 447,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:54.172Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 446,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:54.168Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 445,
    "value": "26.0",
    "updated_at": "2017-01-07T05:07:54.165Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 444,
    "value": "26.0",
    "updated_at": "2017-01-07T05:07:54.161Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 443,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:54.158Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 442,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:54.154Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1051, "value": null, "updated_at": "2017-01-07T05:18:48.913Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 483,
    "value": "2.49",
    "updated_at": "2017-01-07T05:07:54.312Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 482,
    "value": "2.49",
    "updated_at": "2017-01-07T05:07:54.309Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 481,
    "value": "2.51",
    "updated_at": "2017-01-07T05:07:54.305Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 480, "value": "3.0", "updated_at": "2017-01-07T05:07:54.301Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 479,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.296Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 478, "value": "3.0", "updated_at": "2017-01-07T05:07:54.293Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 477,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.289Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 476, "value": "3.0", "updated_at": "2017-01-07T05:07:54.285Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 475,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.280Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 474, "value": "3.0", "updated_at": "2017-01-07T05:07:54.276Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 473,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.273Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 472, "value": "3.0", "updated_at": "2017-01-07T05:07:54.268Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 471,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.265Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 470, "value": "3.0", "updated_at": "2017-01-07T05:07:54.261Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 469,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.258Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 468, "value": "3.0", "updated_at": "2017-01-07T05:07:54.254Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 467,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.250Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 466, "value": "3.0", "updated_at": "2017-01-07T05:07:54.247Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 465,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.243Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 464, "value": "3.0", "updated_at": "2017-01-07T05:07:54.240Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 463,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.236Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1048, "value": null, "updated_at": "2017-01-07T05:18:48.877Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 504,
    "value": "7.2",
    "updated_at": "2017-01-07T05:07:54.401Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 503,
    "value": "7.16",
    "updated_at": "2017-01-07T05:07:54.397Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 502,
    "value": "7.13",
    "updated_at": "2017-01-07T05:07:54.393Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 501, "value": "7.0", "updated_at": "2017-01-07T05:07:54.389Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 500,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.385Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 499, "value": "7.0", "updated_at": "2017-01-07T05:07:54.380Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 498,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.376Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 497, "value": "7.0", "updated_at": "2017-01-07T05:07:54.372Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 496,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.368Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 495, "value": "7.0", "updated_at": "2017-01-07T05:07:54.364Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 494,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.360Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 493, "value": "7.0", "updated_at": "2017-01-07T05:07:54.357Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 492,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.353Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 491, "value": "7.0", "updated_at": "2017-01-07T05:07:54.349Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 490,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.345Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 489, "value": "7.0", "updated_at": "2017-01-07T05:07:54.341Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 488,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:54.337Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 487, "value": "8.0", "updated_at": "2017-01-07T05:07:54.333Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 486,
    "value": "8.0",
    "updated_at": "2017-01-07T05:07:54.328Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 485, "value": "8.0", "updated_at": "2017-01-07T05:07:54.324Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 484,
    "value": "8.0",
    "updated_at": "2017-01-07T05:07:54.320Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1050, "value": null, "updated_at": "2017-01-07T05:18:48.911Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 525,
    "value": "30.28",
    "updated_at": "2017-01-07T05:07:54.481Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 524,
    "value": "30.63",
    "updated_at": "2017-01-07T05:07:54.478Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 523,
    "value": "30.52",
    "updated_at": "2017-01-07T05:07:54.475Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 522,
    "value": "31.0",
    "updated_at": "2017-01-07T05:07:54.471Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 521,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:54.467Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 520,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:54.464Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 519,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:54.460Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 518,
    "value": "31.0",
    "updated_at": "2017-01-07T05:07:54.457Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 517,
    "value": "31.0",
    "updated_at": "2017-01-07T05:07:54.453Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 516,
    "value": "32.0",
    "updated_at": "2017-01-07T05:07:54.449Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 515,
    "value": "32.0",
    "updated_at": "2017-01-07T05:07:54.446Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 514,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.442Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 513,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.438Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 512,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.434Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 511,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.431Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 510,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.427Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 509,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.423Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 508,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.420Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 507,
    "value": "33.0",
    "updated_at": "2017-01-07T05:07:54.416Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 506,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:54.412Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 505,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:54.409Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 1052, "value": null, "updated_at": "2017-01-07T05:18:49.098Z", "ts": "2016-12-01 00:00:00.000"}, {
    "id": 546,
    "value": "3.95",
    "updated_at": "2017-01-07T05:07:54.577Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 545,
    "value": "3.68",
    "updated_at": "2017-01-07T05:07:54.574Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 544, "value": "3.7", "updated_at": "2017-01-07T05:07:54.570Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 543,
    "value": "4.0",
    "updated_at": "2017-01-07T05:07:54.565Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 542, "value": "3.0", "updated_at": "2017-01-07T05:07:54.562Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 541,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.558Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 540, "value": "3.0", "updated_at": "2017-01-07T05:07:54.554Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 539,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.550Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 538, "value": "3.0", "updated_at": "2017-01-07T05:07:54.546Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 537,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.543Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 536, "value": "3.0", "updated_at": "2017-01-07T05:07:54.538Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 535,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:54.534Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 534, "value": "3.0", "updated_at": "2017-01-07T05:07:54.520Z", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 533,
    "value": "2.0",
    "updated_at": "2017-01-07T05:07:54.515Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 532, "value": "2.0", "updated_at": "2017-01-07T05:07:54.511Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 531,
    "value": "2.0",
    "updated_at": "2017-01-07T05:07:54.507Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 530, "value": "2.0", "updated_at": "2017-01-07T05:07:54.503Z", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 529,
    "value": "2.0",
    "updated_at": "2017-01-07T05:07:54.500Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 528, "value": "2.0", "updated_at": "2017-01-07T05:07:54.495Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 527,
    "value": "2.0",
    "updated_at": "2017-01-07T05:07:54.491Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 526, "value": "2.0", "updated_at": "2017-01-07T05:07:54.488Z", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 585,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.727Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 584, "value": null, "updated_at": "2017-01-07T05:07:54.724Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 583,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.720Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 582, "value": null, "updated_at": "2017-01-07T05:07:54.717Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 581,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.714Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 580, "value": null, "updated_at": "2017-01-07T05:07:54.710Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 579,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.707Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 578,
    "value": "82.07",
    "updated_at": "2017-01-07T05:07:54.704Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 577,
    "value": "80.71",
    "updated_at": "2017-01-07T05:07:54.701Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 576,
    "value": "80.7",
    "updated_at": "2017-01-07T05:07:54.697Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 575,
    "value": "78.82",
    "updated_at": "2017-01-07T05:07:54.692Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 574, "value": null, "updated_at": "2017-01-07T05:07:54.689Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 573,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.685Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 572, "value": null, "updated_at": "2017-01-07T05:07:54.682Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 571,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.679Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 570, "value": null, "updated_at": "2017-01-07T05:07:54.673Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 569,
    "value": "78.5",
    "updated_at": "2017-01-07T05:07:54.670Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 568,
    "value": "76.88",
    "updated_at": "2017-01-07T05:07:54.666Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 567,
    "value": "76.32",
    "updated_at": "2017-01-07T05:07:54.663Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 566,
    "value": "76.29",
    "updated_at": "2017-01-07T05:07:54.659Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 565,
    "value": "76.55",
    "updated_at": "2017-01-07T05:07:54.656Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 605, "value": null, "updated_at": "2017-01-07T05:07:54.819Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 604,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.816Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 603, "value": null, "updated_at": "2017-01-07T05:07:54.813Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 602,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.809Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 601, "value": null, "updated_at": "2017-01-07T05:07:54.806Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 600,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.803Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 599,
    "value": "11.81",
    "updated_at": "2017-01-07T05:07:54.800Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 598,
    "value": "12.65",
    "updated_at": "2017-01-07T05:07:54.796Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 597,
    "value": "12.43",
    "updated_at": "2017-01-07T05:07:54.792Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 596,
    "value": "13.82",
    "updated_at": "2017-01-07T05:07:54.788Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 595, "value": null, "updated_at": "2017-01-07T05:07:54.783Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 594,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.773Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 593, "value": null, "updated_at": "2017-01-07T05:07:54.764Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 592,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.755Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 591, "value": null, "updated_at": "2017-01-07T05:07:54.751Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 590,
    "value": "14.4",
    "updated_at": "2017-01-07T05:07:54.746Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 589,
    "value": "14.4",
    "updated_at": "2017-01-07T05:07:54.743Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 588,
    "value": "14.15",
    "updated_at": "2017-01-07T05:07:54.739Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 587,
    "value": "14.42",
    "updated_at": "2017-01-07T05:07:54.736Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 586,
    "value": "14.02",
    "updated_at": "2017-01-07T05:07:54.733Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 625, "value": null, "updated_at": "2017-01-07T05:07:54.889Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 624,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.886Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 623, "value": null, "updated_at": "2017-01-07T05:07:54.883Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 622,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.879Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 621, "value": null, "updated_at": "2017-01-07T05:07:54.876Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 620,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.872Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 619,
    "value": "6.12",
    "updated_at": "2017-01-07T05:07:54.869Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 618,
    "value": "6.64",
    "updated_at": "2017-01-07T05:07:54.866Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 617,
    "value": "6.87",
    "updated_at": "2017-01-07T05:07:54.862Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 616,
    "value": "7.36",
    "updated_at": "2017-01-07T05:07:54.859Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 615, "value": null, "updated_at": "2017-01-07T05:07:54.855Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 614,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.852Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 613, "value": null, "updated_at": "2017-01-07T05:07:54.849Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 612,
    "value": null,
    "updated_at": "2017-01-07T05:07:54.845Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 611, "value": null, "updated_at": "2017-01-07T05:07:54.842Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 610,
    "value": "7.68",
    "updated_at": "2017-01-07T05:07:54.838Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 609,
    "value": "8.72",
    "updated_at": "2017-01-07T05:07:54.835Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 608,
    "value": "9.53",
    "updated_at": "2017-01-07T05:07:54.832Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 607,
    "value": "9.29",
    "updated_at": "2017-01-07T05:07:54.828Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 606,
    "value": "9.43",
    "updated_at": "2017-01-07T05:07:54.825Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 646,
    "value": "12.27",
    "updated_at": "2017-01-07T05:07:54.963Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 645,
    "value": "9.89",
    "updated_at": "2017-01-07T05:07:54.959Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 644,
    "value": "10.28",
    "updated_at": "2017-01-07T05:07:54.956Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 643,
    "value": "8.81",
    "updated_at": "2017-01-07T05:07:54.952Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 642,
    "value": "7.39",
    "updated_at": "2017-01-07T05:07:54.949Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 641,
    "value": "14.79",
    "updated_at": "2017-01-07T05:07:54.946Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 640,
    "value": "15.44",
    "updated_at": "2017-01-07T05:07:54.942Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 639,
    "value": "12.14",
    "updated_at": "2017-01-07T05:07:54.939Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 638,
    "value": "12.14",
    "updated_at": "2017-01-07T05:07:54.936Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 637,
    "value": "12.79",
    "updated_at": "2017-01-07T05:07:54.932Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 636,
    "value": "11.18",
    "updated_at": "2017-01-07T05:07:54.929Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 635,
    "value": "9.12",
    "updated_at": "2017-01-07T05:07:54.926Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 634,
    "value": "10.77",
    "updated_at": "2017-01-07T05:07:54.922Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 633,
    "value": "10.23",
    "updated_at": "2017-01-07T05:07:54.919Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 632,
    "value": "10.84",
    "updated_at": "2017-01-07T05:07:54.915Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 631, "value": "9.5", "updated_at": "2017-01-07T05:07:54.912Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 630,
    "value": "6.95",
    "updated_at": "2017-01-07T05:07:54.909Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 629,
    "value": "15.26",
    "updated_at": "2017-01-07T05:07:54.905Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 628,
    "value": "16.28",
    "updated_at": "2017-01-07T05:07:54.902Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 627,
    "value": "17.7",
    "updated_at": "2017-01-07T05:07:54.899Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 626,
    "value": "18.61",
    "updated_at": "2017-01-07T05:07:54.895Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 667,
    "value": "47.92",
    "updated_at": "2017-01-07T05:07:55.035Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 666,
    "value": "37.21",
    "updated_at": "2017-01-07T05:07:55.032Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 665,
    "value": "42.06",
    "updated_at": "2017-01-07T05:07:55.029Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 664,
    "value": "38.82",
    "updated_at": "2017-01-07T05:07:55.026Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 663,
    "value": "36.42",
    "updated_at": "2017-01-07T05:07:55.023Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 662,
    "value": "55.7",
    "updated_at": "2017-01-07T05:07:55.019Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 661,
    "value": "52.55",
    "updated_at": "2017-01-07T05:07:55.016Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 660,
    "value": "55.51",
    "updated_at": "2017-01-07T05:07:55.013Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 659,
    "value": "61.76",
    "updated_at": "2017-01-07T05:07:55.009Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 658,
    "value": "55.08",
    "updated_at": "2017-01-07T05:07:55.006Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 657,
    "value": "61.33",
    "updated_at": "2017-01-07T05:07:55.003Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 656,
    "value": "64.47",
    "updated_at": "2017-01-07T05:07:55.000Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 655,
    "value": "52.06",
    "updated_at": "2017-01-07T05:07:54.996Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 654,
    "value": "38.89",
    "updated_at": "2017-01-07T05:07:54.993Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 653,
    "value": "45.85",
    "updated_at": "2017-01-07T05:07:54.989Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 652,
    "value": "35.95",
    "updated_at": "2017-01-07T05:07:54.986Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 651,
    "value": "33.42",
    "updated_at": "2017-01-07T05:07:54.983Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 650,
    "value": "56.55",
    "updated_at": "2017-01-07T05:07:54.979Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 649,
    "value": "54.7",
    "updated_at": "2017-01-07T05:07:54.976Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 648,
    "value": "51.52",
    "updated_at": "2017-01-07T05:07:54.972Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 647,
    "value": "54.23",
    "updated_at": "2017-01-07T05:07:54.969Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 688,
    "value": "10.19",
    "updated_at": "2017-01-07T05:07:55.113Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 687,
    "value": "8.49",
    "updated_at": "2017-01-07T05:07:55.109Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 686,
    "value": "9.22",
    "updated_at": "2017-01-07T05:07:55.105Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 685,
    "value": "8.33",
    "updated_at": "2017-01-07T05:07:55.102Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 684,
    "value": "5.63",
    "updated_at": "2017-01-07T05:07:55.099Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 683,
    "value": "8.36",
    "updated_at": "2017-01-07T05:07:55.094Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 682,
    "value": "10.26",
    "updated_at": "2017-01-07T05:07:55.089Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 681,
    "value": "10.37",
    "updated_at": "2017-01-07T05:07:55.086Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 680,
    "value": "8.72",
    "updated_at": "2017-01-07T05:07:55.082Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 679,
    "value": "9.05",
    "updated_at": "2017-01-07T05:07:55.079Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 678,
    "value": "9.15",
    "updated_at": "2017-01-07T05:07:55.076Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 677,
    "value": "11.55",
    "updated_at": "2017-01-07T05:07:55.072Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 676,
    "value": "8.75",
    "updated_at": "2017-01-07T05:07:55.069Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 675,
    "value": "8.27",
    "updated_at": "2017-01-07T05:07:55.066Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 674,
    "value": "8.03",
    "updated_at": "2017-01-07T05:07:55.062Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 673,
    "value": "7.21",
    "updated_at": "2017-01-07T05:07:55.059Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 672,
    "value": "5.15",
    "updated_at": "2017-01-07T05:07:55.056Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 671,
    "value": "12.29",
    "updated_at": "2017-01-07T05:07:55.052Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 670,
    "value": "12.69",
    "updated_at": "2017-01-07T05:07:55.049Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 669,
    "value": "13.19",
    "updated_at": "2017-01-07T05:07:55.045Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 668,
    "value": "14.38",
    "updated_at": "2017-01-07T05:07:55.041Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 709,
    "value": "22.52",
    "updated_at": "2017-01-07T05:07:55.219Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 708,
    "value": "38.45",
    "updated_at": "2017-01-07T05:07:55.215Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 707,
    "value": "31.93",
    "updated_at": "2017-01-07T05:07:55.210Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 706,
    "value": "38.41",
    "updated_at": "2017-01-07T05:07:55.206Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 705,
    "value": "46.76",
    "updated_at": "2017-01-07T05:07:55.202Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 704,
    "value": "14.92",
    "updated_at": "2017-01-07T05:07:55.197Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 703,
    "value": "14.33",
    "updated_at": "2017-01-07T05:07:55.190Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 702,
    "value": "13.0",
    "updated_at": "2017-01-07T05:07:55.186Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 701,
    "value": "11.57",
    "updated_at": "2017-01-07T05:07:55.181Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 700,
    "value": "16.24",
    "updated_at": "2017-01-07T05:07:55.174Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 699,
    "value": "12.99",
    "updated_at": "2017-01-07T05:07:55.169Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 698,
    "value": "10.92",
    "updated_at": "2017-01-07T05:07:55.163Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 697,
    "value": "23.75",
    "updated_at": "2017-01-07T05:07:55.158Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 696,
    "value": "38.11",
    "updated_at": "2017-01-07T05:07:55.153Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 695,
    "value": "30.39",
    "updated_at": "2017-01-07T05:07:55.148Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 694,
    "value": "42.79",
    "updated_at": "2017-01-07T05:07:55.143Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 693,
    "value": "51.85",
    "updated_at": "2017-01-07T05:07:55.138Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 692,
    "value": "11.65",
    "updated_at": "2017-01-07T05:07:55.135Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 691,
    "value": "12.07",
    "updated_at": "2017-01-07T05:07:55.131Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 690,
    "value": "12.95",
    "updated_at": "2017-01-07T05:07:55.128Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 689,
    "value": "8.02",
    "updated_at": "2017-01-07T05:07:55.123Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 730,
    "value": "5.42",
    "updated_at": "2017-01-07T05:07:55.333Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 729,
    "value": "4.39",
    "updated_at": "2017-01-07T05:07:55.330Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 728,
    "value": "4.74",
    "updated_at": "2017-01-07T05:07:55.326Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 727,
    "value": "5.63",
    "updated_at": "2017-01-07T05:07:55.323Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 726, "value": "3.8", "updated_at": "2017-01-07T05:07:55.319Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 725,
    "value": "6.23",
    "updated_at": "2017-01-07T05:07:55.316Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 724,
    "value": "7.42",
    "updated_at": "2017-01-07T05:07:55.313Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 723,
    "value": "6.73",
    "updated_at": "2017-01-07T05:07:55.310Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 722,
    "value": "5.81",
    "updated_at": "2017-01-07T05:07:55.306Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 721,
    "value": "6.84",
    "updated_at": "2017-01-07T05:07:55.303Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 720,
    "value": "5.35",
    "updated_at": "2017-01-07T05:07:55.299Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 719,
    "value": "3.93",
    "updated_at": "2017-01-07T05:07:55.296Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 718,
    "value": "4.67",
    "updated_at": "2017-01-07T05:07:55.293Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 717, "value": "4.5", "updated_at": "2017-01-07T05:07:55.289Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 716,
    "value": "4.89",
    "updated_at": "2017-01-07T05:07:55.282Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 715,
    "value": "4.55",
    "updated_at": "2017-01-07T05:07:55.275Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 714,
    "value": "2.63",
    "updated_at": "2017-01-07T05:07:55.256Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 713,
    "value": "4.25",
    "updated_at": "2017-01-07T05:07:55.239Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 712,
    "value": "4.27",
    "updated_at": "2017-01-07T05:07:55.235Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 711,
    "value": "4.65",
    "updated_at": "2017-01-07T05:07:55.230Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 710,
    "value": "4.75",
    "updated_at": "2017-01-07T05:07:55.226Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 819,
    "value": "97.0",
    "updated_at": "2017-01-07T05:07:55.978Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 818,
    "value": "94.0",
    "updated_at": "2017-01-07T05:07:55.974Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 817,
    "value": "97.0",
    "updated_at": "2017-01-07T05:07:55.971Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 816,
    "value": "96.0",
    "updated_at": "2017-01-07T05:07:55.967Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 815,
    "value": "97.0",
    "updated_at": "2017-01-07T05:07:55.963Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 814,
    "value": "90.0",
    "updated_at": "2017-01-07T05:07:55.959Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 813,
    "value": "95.0",
    "updated_at": "2017-01-07T05:07:55.956Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 812,
    "value": "99.0",
    "updated_at": "2017-01-07T05:07:55.952Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 827,
    "value": "100.0",
    "updated_at": "2017-01-07T05:07:56.009Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 826,
    "value": "100.0",
    "updated_at": "2017-01-07T05:07:56.006Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 825,
    "value": "99.0",
    "updated_at": "2017-01-07T05:07:56.003Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 824,
    "value": "99.0",
    "updated_at": "2017-01-07T05:07:55.999Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 823,
    "value": "98.0",
    "updated_at": "2017-01-07T05:07:55.996Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 822,
    "value": "97.0",
    "updated_at": "2017-01-07T05:07:55.993Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 821,
    "value": "92.0",
    "updated_at": "2017-01-07T05:07:55.989Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 820,
    "value": "94.0",
    "updated_at": "2017-01-07T05:07:55.986Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 835,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:56.039Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 834,
    "value": "22.0",
    "updated_at": "2017-01-07T05:07:56.035Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 833,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:56.032Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 832,
    "value": "21.93",
    "updated_at": "2017-01-07T05:07:56.029Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 831,
    "value": "23.0",
    "updated_at": "2017-01-07T05:07:56.026Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 830,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:56.022Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 829,
    "value": "15.0",
    "updated_at": "2017-01-07T05:07:56.019Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 828, "value": "1.9", "updated_at": "2017-01-07T05:07:56.015Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 843,
    "value": "55.0",
    "updated_at": "2017-01-07T05:07:56.070Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 842,
    "value": "54.0",
    "updated_at": "2017-01-07T05:07:56.066Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 841,
    "value": "51.0",
    "updated_at": "2017-01-07T05:07:56.063Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 840,
    "value": "50.0",
    "updated_at": "2017-01-07T05:07:56.060Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 839,
    "value": "49.0",
    "updated_at": "2017-01-07T05:07:56.057Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 838,
    "value": "47.0",
    "updated_at": "2017-01-07T05:07:56.053Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 837,
    "value": "48.0",
    "updated_at": "2017-01-07T05:07:56.049Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 836,
    "value": "43.0",
    "updated_at": "2017-01-07T05:07:56.045Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 851, "value": "5.0", "updated_at": "2017-01-07T05:07:56.104Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 850,
    "value": "5.0",
    "updated_at": "2017-01-07T05:07:56.098Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 849, "value": "5.0", "updated_at": "2017-01-07T05:07:56.093Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 848,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:56.089Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 847, "value": "2.0", "updated_at": "2017-01-07T05:07:56.086Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 846,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.083Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 845, "value": "6.0", "updated_at": "2017-01-07T05:07:56.079Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 844,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.076Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 859,
    "value": "40.0",
    "updated_at": "2017-01-07T05:07:56.137Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 858,
    "value": "41.0",
    "updated_at": "2017-01-07T05:07:56.134Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 857,
    "value": "44.0",
    "updated_at": "2017-01-07T05:07:56.130Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 856,
    "value": "47.0",
    "updated_at": "2017-01-07T05:07:56.127Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 855,
    "value": "49.0",
    "updated_at": "2017-01-07T05:07:56.124Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 854,
    "value": "47.0",
    "updated_at": "2017-01-07T05:07:56.120Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 853,
    "value": "46.0",
    "updated_at": "2017-01-07T05:07:56.117Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 852,
    "value": "51.0",
    "updated_at": "2017-01-07T05:07:56.112Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 867,
    "value": "17.0",
    "updated_at": "2017-01-07T05:07:56.166Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 866,
    "value": "20.0",
    "updated_at": "2017-01-07T05:07:56.163Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 865,
    "value": "18.0",
    "updated_at": "2017-01-07T05:07:56.160Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 864,
    "value": "17.0",
    "updated_at": "2017-01-07T05:07:56.156Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 863,
    "value": "16.0",
    "updated_at": "2017-01-07T05:07:56.153Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 862,
    "value": "17.0",
    "updated_at": "2017-01-07T05:07:56.149Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 861,
    "value": "15.0",
    "updated_at": "2017-01-07T05:07:56.146Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 860,
    "value": "16.0",
    "updated_at": "2017-01-07T05:07:56.143Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 875,
    "value": "52.0",
    "updated_at": "2017-01-07T05:07:56.200Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 874,
    "value": "50.0",
    "updated_at": "2017-01-07T05:07:56.195Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 873,
    "value": "47.0",
    "updated_at": "2017-01-07T05:07:56.192Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 872,
    "value": "37.0",
    "updated_at": "2017-01-07T05:07:56.188Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 871,
    "value": "37.0",
    "updated_at": "2017-01-07T05:07:56.185Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 870,
    "value": "38.0",
    "updated_at": "2017-01-07T05:07:56.181Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 869,
    "value": "41.0",
    "updated_at": "2017-01-07T05:07:56.176Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 868,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:56.172Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 883,
    "value": "22.0",
    "updated_at": "2017-01-07T05:07:56.230Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 882,
    "value": "22.0",
    "updated_at": "2017-01-07T05:07:56.227Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 881,
    "value": "26.0",
    "updated_at": "2017-01-07T05:07:56.223Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 880,
    "value": "29.0",
    "updated_at": "2017-01-07T05:07:56.220Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 879,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:56.217Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 878,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:56.213Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 877,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:56.210Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 876,
    "value": "23.0",
    "updated_at": "2017-01-07T05:07:56.206Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 891, "value": "5.0", "updated_at": "2017-01-07T05:07:56.259Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 890,
    "value": "5.0",
    "updated_at": "2017-01-07T05:07:56.256Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 889, "value": "5.0", "updated_at": "2017-01-07T05:07:56.253Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 888,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.249Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 887, "value": "6.0", "updated_at": "2017-01-07T05:07:56.246Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 886,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.242Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 885, "value": "6.0", "updated_at": "2017-01-07T05:07:56.239Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 884,
    "value": "16.0",
    "updated_at": "2017-01-07T05:07:56.236Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 899, "value": "4.0", "updated_at": "2017-01-07T05:07:56.289Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 898,
    "value": "3.0",
    "updated_at": "2017-01-07T05:07:56.285Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 897, "value": "4.0", "updated_at": "2017-01-07T05:07:56.282Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 896,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.278Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 895,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.275Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 894,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.272Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 893,
    "value": "10.0",
    "updated_at": "2017-01-07T05:07:56.269Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 892,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.265Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 903,
    "value": "74.5",
    "updated_at": "2017-01-07T05:07:56.456Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 902,
    "value": "75.6",
    "updated_at": "2017-01-07T05:07:56.452Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 901,
    "value": "76.8",
    "updated_at": "2017-01-07T05:07:56.449Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 900, "value": null, "updated_at": "2017-01-07T05:07:56.445Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 907,
    "value": "57.9",
    "updated_at": "2017-01-07T05:07:56.474Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 906,
    "value": "58.2",
    "updated_at": "2017-01-07T05:07:56.471Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 905,
    "value": "56.1",
    "updated_at": "2017-01-07T05:07:56.467Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 904,
    "value": "58.0",
    "updated_at": "2017-01-07T05:07:56.464Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 911,
    "value": "58.1",
    "updated_at": "2017-01-07T05:07:56.491Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 910,
    "value": "50.3",
    "updated_at": "2017-01-07T05:07:56.487Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 909,
    "value": "76.2",
    "updated_at": "2017-01-07T05:07:56.484Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 908,
    "value": "42.0",
    "updated_at": "2017-01-07T05:07:56.480Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 915,
    "value": "12.0",
    "updated_at": "2017-01-07T05:07:56.508Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 914,
    "value": "10.0",
    "updated_at": "2017-01-07T05:07:56.505Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 913, "value": "7.0", "updated_at": "2017-01-07T05:07:56.501Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 912,
    "value": "8.0",
    "updated_at": "2017-01-07T05:07:56.497Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 919,
    "value": "41.0",
    "updated_at": "2017-01-07T05:07:56.524Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 918,
    "value": "41.0",
    "updated_at": "2017-01-07T05:07:56.521Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 917,
    "value": "47.0",
    "updated_at": "2017-01-07T05:07:56.517Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 916,
    "value": "46.0",
    "updated_at": "2017-01-07T05:07:56.514Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 923,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:56.540Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 922,
    "value": "32.0",
    "updated_at": "2017-01-07T05:07:56.537Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 921,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:56.534Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 920,
    "value": "28.0",
    "updated_at": "2017-01-07T05:07:56.530Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 927, "value": "5.0", "updated_at": "2017-01-07T05:07:56.557Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 926,
    "value": "4.0",
    "updated_at": "2017-01-07T05:07:56.553Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 925, "value": "3.0", "updated_at": "2017-01-07T05:07:56.550Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 924,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.547Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 931,
    "value": "16.0",
    "updated_at": "2017-01-07T05:07:56.573Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 930,
    "value": "13.0",
    "updated_at": "2017-01-07T05:07:56.569Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 929,
    "value": "18.0",
    "updated_at": "2017-01-07T05:07:56.566Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 928,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.562Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 935,
    "value": "78.2",
    "updated_at": "2017-01-07T05:07:56.591Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 934,
    "value": "70.2",
    "updated_at": "2017-01-07T05:07:56.586Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 933,
    "value": "86.0",
    "updated_at": "2017-01-07T05:07:56.583Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 932,
    "value": "66.0",
    "updated_at": "2017-01-07T05:07:56.579Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 939,
    "value": "21.8",
    "updated_at": "2017-01-07T05:07:56.614Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 938,
    "value": "29.8",
    "updated_at": "2017-01-07T05:07:56.609Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 937,
    "value": "14.0",
    "updated_at": "2017-01-07T05:07:56.605Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 936,
    "value": "34.0",
    "updated_at": "2017-01-07T05:07:56.599Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 943,
    "value": "98.4",
    "updated_at": "2017-01-07T05:07:56.633Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 942,
    "value": "99.4",
    "updated_at": "2017-01-07T05:07:56.629Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 941,
    "value": "99.6",
    "updated_at": "2017-01-07T05:07:56.626Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 940,
    "value": "98.0",
    "updated_at": "2017-01-07T05:07:56.622Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 947, "value": "1.6", "updated_at": "2017-01-07T05:07:56.650Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 946,
    "value": "0.6",
    "updated_at": "2017-01-07T05:07:56.647Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 945, "value": "0.4", "updated_at": "2017-01-07T05:07:56.643Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 944,
    "value": "2.0",
    "updated_at": "2017-01-07T05:07:56.639Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 951,
    "value": "66.0",
    "updated_at": "2017-01-07T05:07:56.667Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 950,
    "value": "62.0",
    "updated_at": "2017-01-07T05:07:56.663Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 949,
    "value": "65.0",
    "updated_at": "2017-01-07T05:07:56.660Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 948,
    "value": "66.0",
    "updated_at": "2017-01-07T05:07:56.657Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 955,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:56.695Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 954,
    "value": "30.0",
    "updated_at": "2017-01-07T05:07:56.690Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 953,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:56.683Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 952,
    "value": "27.0",
    "updated_at": "2017-01-07T05:07:56.675Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 959, "value": "7.0", "updated_at": "2017-01-07T05:07:56.718Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 958,
    "value": "8.0",
    "updated_at": "2017-01-07T05:07:56.713Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 957, "value": "8.0", "updated_at": "2017-01-07T05:07:56.709Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 956,
    "value": "7.0",
    "updated_at": "2017-01-07T05:07:56.704Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 963,
    "value": "45.0",
    "updated_at": "2017-01-07T05:07:56.748Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 962,
    "value": "45.0",
    "updated_at": "2017-01-07T05:07:56.735Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 961,
    "value": "44.5",
    "updated_at": "2017-01-07T05:07:56.731Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 960,
    "value": "43.0",
    "updated_at": "2017-01-07T05:07:56.726Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 967,
    "value": "26.0",
    "updated_at": "2017-01-07T05:07:56.764Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 966,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:56.761Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 965,
    "value": "26.4",
    "updated_at": "2017-01-07T05:07:56.757Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 964,
    "value": "24.0",
    "updated_at": "2017-01-07T05:07:56.754Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 971,
    "value": "13.0",
    "updated_at": "2017-01-07T05:07:56.781Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 970,
    "value": "12.0",
    "updated_at": "2017-01-07T05:07:56.777Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 969,
    "value": "12.9",
    "updated_at": "2017-01-07T05:07:56.774Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 968,
    "value": "15.0",
    "updated_at": "2017-01-07T05:07:56.770Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 975,
    "value": "11.0",
    "updated_at": "2017-01-07T05:07:56.820Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 974,
    "value": "10.0",
    "updated_at": "2017-01-07T05:07:56.811Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 973,
    "value": "10.9",
    "updated_at": "2017-01-07T05:07:56.799Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 972,
    "value": "13.0",
    "updated_at": "2017-01-07T05:07:56.787Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 979, "value": "5.0", "updated_at": "2017-01-07T05:07:56.850Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 978,
    "value": "8.0",
    "updated_at": "2017-01-07T05:07:56.844Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 977, "value": "5.3", "updated_at": "2017-01-07T05:07:56.839Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 976,
    "value": "6.0",
    "updated_at": "2017-01-07T05:07:56.833Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 980,
    "value": "76.0",
    "updated_at": "2017-01-07T05:07:57.055Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 987,
    "value": "92.0",
    "updated_at": "2017-01-07T05:07:57.087Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 986,
    "value": "91.0",
    "updated_at": "2017-01-07T05:07:57.084Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 985,
    "value": "91.0",
    "updated_at": "2017-01-07T05:07:57.080Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 984,
    "value": "93.0",
    "updated_at": "2017-01-07T05:07:57.077Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 983,
    "value": "90.0",
    "updated_at": "2017-01-07T05:07:57.073Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 982,
    "value": "89.0",
    "updated_at": "2017-01-07T05:07:57.070Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 981,
    "value": "77.0",
    "updated_at": "2017-01-07T05:07:57.066Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 993,
    "value": "37560.0",
    "updated_at": "2017-01-07T05:07:57.117Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 992,
    "value": "48060.0",
    "updated_at": "2017-01-07T05:07:57.112Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 991,
    "value": "62400.0",
    "updated_at": "2017-01-07T05:07:57.107Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 990,
    "value": "51420.0",
    "updated_at": "2017-01-07T05:07:57.102Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 989,
    "value": "48317.0",
    "updated_at": "2017-01-07T05:07:57.098Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 988,
    "value": "84807.0",
    "updated_at": "2017-01-07T05:07:57.093Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 994,
    "value": "96.5",
    "updated_at": "2017-01-07T05:07:57.239Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 999,
    "value": "229.0",
    "updated_at": "2017-01-07T05:07:57.260Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 998,
    "value": "342.0",
    "updated_at": "2017-01-07T05:07:57.257Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 997,
    "value": "212.0",
    "updated_at": "2017-01-07T05:07:57.253Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 996,
    "value": "201.0",
    "updated_at": "2017-01-07T05:07:57.250Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 995,
    "value": "31.0",
    "updated_at": "2017-01-07T05:07:57.247Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1005,
    "value": "370.0",
    "updated_at": "2017-01-07T05:07:57.287Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1004,
    "value": "505.0",
    "updated_at": "2017-01-07T05:07:57.284Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1003,
    "value": "377.0",
    "updated_at": "2017-01-07T05:07:57.280Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1002,
    "value": "376.0",
    "updated_at": "2017-01-07T05:07:57.277Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1001,
    "value": "156.0",
    "updated_at": "2017-01-07T05:07:57.272Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1010,
    "value": "252.0",
    "updated_at": "2017-01-07T05:07:57.306Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1009,
    "value": "389.0",
    "updated_at": "2017-01-07T05:07:57.303Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1008,
    "value": "236.0",
    "updated_at": "2017-01-07T05:07:57.300Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1007,
    "value": "239.0",
    "updated_at": "2017-01-07T05:07:57.296Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1006,
    "value": "35.0",
    "updated_at": "2017-01-07T05:07:57.293Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1015,
    "value": "68.1",
    "updated_at": "2017-01-07T05:07:57.326Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1014,
    "value": "77.0",
    "updated_at": "2017-01-07T05:07:57.323Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1013,
    "value": "62.6",
    "updated_at": "2017-01-07T05:07:57.319Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1012,
    "value": "63.6",
    "updated_at": "2017-01-07T05:07:57.316Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1011,
    "value": "22.4",
    "updated_at": "2017-01-07T05:07:57.313Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1020,
    "value": "90.9",
    "updated_at": "2017-01-07T05:07:57.346Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1019,
    "value": "87.9",
    "updated_at": "2017-01-07T05:07:57.342Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1018,
    "value": "99.1",
    "updated_at": "2017-01-07T05:07:57.339Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1017,
    "value": "95.3",
    "updated_at": "2017-01-07T05:07:57.336Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1016,
    "value": "93.9",
    "updated_at": "2017-01-07T05:07:57.332Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1025,
    "value": "69.6",
    "updated_at": "2017-01-07T05:07:57.366Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1024,
    "value": "55.8",
    "updated_at": "2017-01-07T05:07:57.363Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1023,
    "value": "92.3",
    "updated_at": "2017-01-07T05:07:57.359Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1022,
    "value": "73.7",
    "updated_at": "2017-01-07T05:07:57.355Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1021,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:57.352Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1030,
    "value": "26.1",
    "updated_at": "2017-01-07T05:07:57.386Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1029,
    "value": "30.8",
    "updated_at": "2017-01-07T05:07:57.383Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1028,
    "value": "4.2",
    "updated_at": "2017-01-07T05:07:57.379Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1027,
    "value": "23.7",
    "updated_at": "2017-01-07T05:07:57.376Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1026,
    "value": "50.0",
    "updated_at": "2017-01-07T05:07:57.372Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1035,
    "value": "4.3",
    "updated_at": "2017-01-07T05:07:57.406Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1034,
    "value": "13.4",
    "updated_at": "2017-01-07T05:07:57.403Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1033,
    "value": "4.2",
    "updated_at": "2017-01-07T05:07:57.399Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1032,
    "value": "2.6",
    "updated_at": "2017-01-07T05:07:57.396Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1031,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.392Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1040,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.426Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1039,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.422Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1038,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.419Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1037,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.416Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 1036,
    "value": "25.0",
    "updated_at": "2017-01-07T05:07:57.412Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 1045,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.446Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 1044,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.442Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 1043,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.439Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 1042,
    "value": "0.0",
    "updated_at": "2017-01-07T05:07:57.435Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 1041, "value": "0.0", "updated_at": "2017-01-07T05:07:57.432Z", "ts": "2016-04-01 00:00:00.000"}]
}
