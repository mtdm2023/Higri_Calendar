$(document).ready(function () {
  $.CalCSVData = [
    { hyr: "1431", hmn: "02", greg_date: "2010-01-16", dow: "6", hmnlen: "30" },
    { hyr: "1431", hmn: "03", greg_date: "2010-02-15", dow: "1", hmnlen: "30" },
    { hyr: "1431", hmn: "04", greg_date: "2010-03-17", dow: "3", hmnlen: "29" },
    { hyr: "1431", hmn: "05", greg_date: "2010-04-15", dow: "4", hmnlen: "30" },
    { hyr: "1431", hmn: "06", greg_date: "2010-05-15", dow: "6", hmnlen: "29" },
    { hyr: "1431", hmn: "07", greg_date: "2010-06-13", dow: "0", hmnlen: "30" },
    { hyr: "1431", hmn: "08", greg_date: "2010-07-13", dow: "2", hmnlen: "29" },
    { hyr: "1431", hmn: "09", greg_date: "2010-08-11", dow: "3", hmnlen: "30" },
    { hyr: "1431", hmn: "10", greg_date: "2010-09-10", dow: "5", hmnlen: "29" },
    { hyr: "1431", hmn: "11", greg_date: "2010-10-09", dow: "6", hmnlen: "29" },
    { hyr: "1431", hmn: "12", greg_date: "2010-11-07", dow: "0", hmnlen: "30" },
    { hyr: "1432", hmn: "01", greg_date: "2010-12-07", dow: "2", hmnlen: "29" },
    { hyr: "1432", hmn: "02", greg_date: "2011-01-05", dow: "3", hmnlen: "30" },
    { hyr: "1432", hmn: "03", greg_date: "2011-02-04", dow: "5", hmnlen: "30" },
    { hyr: "1432", hmn: "04", greg_date: "2011-03-06", dow: "0", hmnlen: "30" },
    { hyr: "1432", hmn: "05", greg_date: "2011-04-05", dow: "2", hmnlen: "29" },
    { hyr: "1432", hmn: "06", greg_date: "2011-05-04", dow: "3", hmnlen: "30" },
    { hyr: "1432", hmn: "07", greg_date: "2011-06-03", dow: "5", hmnlen: "29" },
    { hyr: "1432", hmn: "08", greg_date: "2011-07-02", dow: "6", hmnlen: "30" },
    { hyr: "1432", hmn: "09", greg_date: "2011-08-01", dow: "1", hmnlen: "29" },
    { hyr: "1432", hmn: "10", greg_date: "2011-08-30", dow: "2", hmnlen: "30" },
    { hyr: "1432", hmn: "11", greg_date: "2011-09-29", dow: "4", hmnlen: "29" },
    { hyr: "1432", hmn: "12", greg_date: "2011-10-28", dow: "5", hmnlen: "29" },
    { hyr: "1433", hmn: "01", greg_date: "2011-11-26", dow: "6", hmnlen: "30" },
    { hyr: "1433", hmn: "02", greg_date: "2011-12-26", dow: "1", hmnlen: "29" },
    { hyr: "1433", hmn: "03", greg_date: "2012-01-24", dow: "2", hmnlen: "30" },
    { hyr: "1433", hmn: "04", greg_date: "2012-02-23", dow: "4", hmnlen: "30" },
    { hyr: "1433", hmn: "05", greg_date: "2012-03-24", dow: "6", hmnlen: "29" },
    { hyr: "1433", hmn: "06", greg_date: "2012-04-22", dow: "0", hmnlen: "30" },
    { hyr: "1433", hmn: "07", greg_date: "2012-05-22", dow: "2", hmnlen: "30" },
    { hyr: "1433", hmn: "08", greg_date: "2012-06-21", dow: "4", hmnlen: "29" },
    { hyr: "1433", hmn: "09", greg_date: "2012-07-20", dow: "5", hmnlen: "30" },
    { hyr: "1433", hmn: "10", greg_date: "2012-08-19", dow: "0", hmnlen: "29" },
    { hyr: "1433", hmn: "11", greg_date: "2012-09-17", dow: "1", hmnlen: "30" },
    { hyr: "1433", hmn: "12", greg_date: "2012-10-17", dow: "3", hmnlen: "29" },
    { hyr: "1434", hmn: "01", greg_date: "2012-11-15", dow: "4", hmnlen: "29" },
    { hyr: "1434", hmn: "02", greg_date: "2012-12-14", dow: "5", hmnlen: "30" },
    { hyr: "1434", hmn: "03", greg_date: "2013-01-13", dow: "0", hmnlen: "29" },
    { hyr: "1434", hmn: "04", greg_date: "2013-02-11", dow: "1", hmnlen: "30" },
    { hyr: "1434", hmn: "05", greg_date: "2013-03-13", dow: "3", hmnlen: "29" },
    { hyr: "1434", hmn: "06", greg_date: "2013-04-11", dow: "4", hmnlen: "30" },
    { hyr: "1434", hmn: "07", greg_date: "2013-05-11", dow: "6", hmnlen: "30" },
    { hyr: "1434", hmn: "08", greg_date: "2013-06-10", dow: "1", hmnlen: "29" },
    { hyr: "1434", hmn: "09", greg_date: "2013-07-09", dow: "2", hmnlen: "30" },
    { hyr: "1434", hmn: "10", greg_date: "2013-08-08", dow: "4", hmnlen: "30" },
    { hyr: "1434", hmn: "11", greg_date: "2013-09-07", dow: "6", hmnlen: "29" },
    { hyr: "1434", hmn: "12", greg_date: "2013-10-06", dow: "0", hmnlen: "29" },
    { hyr: "1435", hmn: "01", greg_date: "2013-11-04", dow: "1", hmnlen: "30" },
    { hyr: "1435", hmn: "02", greg_date: "2013-12-04", dow: "3", hmnlen: "29" },
    { hyr: "1435", hmn: "03", greg_date: "2014-01-02", dow: "4", hmnlen: "30" },
    { hyr: "1435", hmn: "04", greg_date: "2014-02-01", dow: "6", hmnlen: "29" },
    { hyr: "1435", hmn: "05", greg_date: "2014-03-02", dow: "0", hmnlen: "30" },
    { hyr: "1435", hmn: "06", greg_date: "2014-04-01", dow: "2", hmnlen: "29" },
    { hyr: "1435", hmn: "07", greg_date: "2014-04-30", dow: "3", hmnlen: "30" },
    { hyr: "1435", hmn: "08", greg_date: "2014-05-30", dow: "5", hmnlen: "29" },
    { hyr: "1435", hmn: "09", greg_date: "2014-06-28", dow: "6", hmnlen: "30" },
    { hyr: "1435", hmn: "10", greg_date: "2014-07-28", dow: "1", hmnlen: "30" },
    { hyr: "1435", hmn: "11", greg_date: "2014-08-27", dow: "3", hmnlen: "29" },
    { hyr: "1435", hmn: "12", greg_date: "2014-09-25", dow: "4", hmnlen: "30" },
    { hyr: "1436", hmn: "01", greg_date: "2014-10-25", dow: "6", hmnlen: "29" },
    { hyr: "1436", hmn: "02", greg_date: "2014-11-23", dow: "0", hmnlen: "30" },
    { hyr: "1436", hmn: "03", greg_date: "2014-12-23", dow: "2", hmnlen: "29" },
    { hyr: "1436", hmn: "04", greg_date: "2015-01-21", dow: "3", hmnlen: "30" },
    { hyr: "1436", hmn: "05", greg_date: "2015-02-20", dow: "5", hmnlen: "29" },
    { hyr: "1436", hmn: "06", greg_date: "2015-03-21", dow: "6", hmnlen: "30" },
    { hyr: "1436", hmn: "07", greg_date: "2015-04-20", dow: "1", hmnlen: "29" },
    { hyr: "1436", hmn: "08", greg_date: "2015-05-19", dow: "2", hmnlen: "30" },
    { hyr: "1436", hmn: "09", greg_date: "2015-06-18", dow: "4", hmnlen: "29" },
    { hyr: "1436", hmn: "10", greg_date: "2015-07-17", dow: "5", hmnlen: "30" },
    { hyr: "1436", hmn: "11", greg_date: "2015-08-16", dow: "0", hmnlen: "29" },
    { hyr: "1436", hmn: "12", greg_date: "2015-09-14", dow: "1", hmnlen: "30" },
    { hyr: "1437", hmn: "01", greg_date: "2015-10-14", dow: "3", hmnlen: "30" },
    { hyr: "1437", hmn: "02", greg_date: "2015-11-13", dow: "5", hmnlen: "29" },
    { hyr: "1437", hmn: "03", greg_date: "2015-12-12", dow: "6", hmnlen: "30" },
    { hyr: "1437", hmn: "04", greg_date: "2016-01-11", dow: "1", hmnlen: "30" },
    { hyr: "1437", hmn: "05", greg_date: "2016-02-10", dow: "3", hmnlen: "29" },
    { hyr: "1437", hmn: "06", greg_date: "2016-03-10", dow: "4", hmnlen: "29" },
    { hyr: "1437", hmn: "07", greg_date: "2016-04-08", dow: "5", hmnlen: "30" },
    { hyr: "1437", hmn: "08", greg_date: "2016-05-08", dow: "0", hmnlen: "29" },
    { hyr: "1437", hmn: "09", greg_date: "2016-06-06", dow: "1", hmnlen: "30" },
    { hyr: "1437", hmn: "10", greg_date: "2016-07-06", dow: "3", hmnlen: "29" },
    { hyr: "1437", hmn: "11", greg_date: "2016-08-04", dow: "4", hmnlen: "29" },
    { hyr: "1437", hmn: "12", greg_date: "2016-09-02", dow: "5", hmnlen: "30" },
    { hyr: "1438", hmn: "01", greg_date: "2016-10-02", dow: "0", hmnlen: "30" },
    { hyr: "1438", hmn: "02", greg_date: "2016-11-01", dow: "2", hmnlen: "29" },
    { hyr: "1438", hmn: "03", greg_date: "2016-11-30", dow: "3", hmnlen: "30" },
    { hyr: "1438", hmn: "04", greg_date: "2016-12-30", dow: "5", hmnlen: "30" },
    { hyr: "1438", hmn: "05", greg_date: "2017-01-29", dow: "0", hmnlen: "30" },
    { hyr: "1438", hmn: "06", greg_date: "2017-02-28", dow: "2", hmnlen: "29" },
    { hyr: "1438", hmn: "07", greg_date: "2017-03-29", dow: "3", hmnlen: "29" },
    { hyr: "1438", hmn: "08", greg_date: "2017-04-27", dow: "4", hmnlen: "30" },
    { hyr: "1438", hmn: "09", greg_date: "2017-05-27", dow: "6", hmnlen: "29" },
    { hyr: "1438", hmn: "10", greg_date: "2017-06-25", dow: "0", hmnlen: "29" },
    { hyr: "1438", hmn: "11", greg_date: "2017-07-24", dow: "1", hmnlen: "30" },
    { hyr: "1438", hmn: "12", greg_date: "2017-08-23", dow: "3", hmnlen: "29" },
    { hyr: "1439", hmn: "01", greg_date: "2017-09-21", dow: "4", hmnlen: "30" },
    { hyr: "1439", hmn: "02", greg_date: "2017-10-21", dow: "6", hmnlen: "29" },
    { hyr: "1439", hmn: "03", greg_date: "2017-11-19", dow: "0", hmnlen: "30" },
    { hyr: "1439", hmn: "04", greg_date: "2017-12-19", dow: "2", hmnlen: "30" },
    { hyr: "1439", hmn: "05", greg_date: "2018-01-18", dow: "4", hmnlen: "30" },
    { hyr: "1439", hmn: "06", greg_date: "2018-02-17", dow: "6", hmnlen: "29" },
    { hyr: "1439", hmn: "07", greg_date: "2018-03-18", dow: "0", hmnlen: "30" },
    { hyr: "1439", hmn: "08", greg_date: "2018-04-17", dow: "2", hmnlen: "30" },
    { hyr: "1439", hmn: "09", greg_date: "2018-05-17", dow: "4", hmnlen: "29" },
    { hyr: "1439", hmn: "10", greg_date: "2018-06-15", dow: "5", hmnlen: "29" },
    { hyr: "1439", hmn: "11", greg_date: "2018-07-14", dow: "6", hmnlen: "29" },
    { hyr: "1439", hmn: "12", greg_date: "2018-08-12", dow: "0", hmnlen: "30" },
    { hyr: "1440", hmn: "01", greg_date: "2018-09-11", dow: "2", hmnlen: "29" },
    { hyr: "1440", hmn: "02", greg_date: "2018-10-10", dow: "3", hmnlen: "30" },
    { hyr: "1440", hmn: "03", greg_date: "2018-11-09", dow: "5", hmnlen: "29" },
    { hyr: "1440", hmn: "04", greg_date: "2018-12-08", dow: "6", hmnlen: "30" },
    { hyr: "1440", hmn: "05", greg_date: "2019-01-07", dow: "1", hmnlen: "30" },
    { hyr: "1440", hmn: "06", greg_date: "2019-02-06", dow: "3", hmnlen: "30" },
    { hyr: "1440", hmn: "07", greg_date: "2019-03-08", dow: "5", hmnlen: "29" },
    { hyr: "1440", hmn: "08", greg_date: "2019-04-06", dow: "6", hmnlen: "30" },
    { hyr: "1440", hmn: "09", greg_date: "2019-05-06", dow: "1", hmnlen: "29" },
    { hyr: "1440", hmn: "10", greg_date: "2019-06-04", dow: "2", hmnlen: "30" },
    { hyr: "1440", hmn: "11", greg_date: "2019-07-04", dow: "4", hmnlen: "29" },
    { hyr: "1440", hmn: "12", greg_date: "2019-08-02", dow: "5", hmnlen: "29" },
    { hyr: "1441", hmn: "01", greg_date: "2019-08-31", dow: "6", hmnlen: "30" },
    { hyr: "1441", hmn: "02", greg_date: "2019-09-30", dow: "1", hmnlen: "29" },
    { hyr: "1441", hmn: "03", greg_date: "2019-10-29", dow: "2", hmnlen: "30" },
    { hyr: "1441", hmn: "04", greg_date: "2019-11-28", dow: "4", hmnlen: "29" },
    { hyr: "1441", hmn: "05", greg_date: "2019-12-27", dow: "5", hmnlen: "30" },
    { hyr: "1441", hmn: "06", greg_date: "2020-01-26", dow: "0", hmnlen: "30" },
    { hyr: "1441", hmn: "07", greg_date: "2020-02-25", dow: "2", hmnlen: "29" },
    { hyr: "1441", hmn: "08", greg_date: "2020-03-25", dow: "3", hmnlen: "30" },
    { hyr: "1441", hmn: "09", greg_date: "2020-04-24", dow: "5", hmnlen: "30" },
    { hyr: "1441", hmn: "10", greg_date: "2020-05-24", dow: "0", hmnlen: "29" },
    { hyr: "1441", hmn: "11", greg_date: "2020-06-22", dow: "1", hmnlen: "30" },
    { hyr: "1441", hmn: "12", greg_date: "2020-07-22", dow: "3", hmnlen: "29" },
    { hyr: "1442", hmn: "01", greg_date: "2020-08-20", dow: "4", hmnlen: "29" },
    { hyr: "1442", hmn: "02", greg_date: "2020-09-18", dow: "5", hmnlen: "30" },
    { hyr: "1442", hmn: "03", greg_date: "2020-10-18", dow: "0", hmnlen: "29" },
    { hyr: "1442", hmn: "04", greg_date: "2020-11-16", dow: "1", hmnlen: "30" },
    { hyr: "1442", hmn: "05", greg_date: "2020-12-16", dow: "3", hmnlen: "29" },
    { hyr: "1442", hmn: "06", greg_date: "2021-01-14", dow: "4", hmnlen: "30" },
    { hyr: "1442", hmn: "07", greg_date: "2021-02-13", dow: "6", hmnlen: "29" },
    { hyr: "1442", hmn: "08", greg_date: "2021-03-14", dow: "0", hmnlen: "30" },
    { hyr: "1442", hmn: "09", greg_date: "2021-04-13", dow: "2", hmnlen: "30" },
    { hyr: "1442", hmn: "10", greg_date: "2021-05-13", dow: "4", hmnlen: "29" },
    { hyr: "1442", hmn: "11", greg_date: "2021-06-11", dow: "5", hmnlen: "30" },
    { hyr: "1442", hmn: "12", greg_date: "2021-07-11", dow: "0", hmnlen: "29" },
    { hyr: "1443", hmn: "01", greg_date: "2021-08-09", dow: "1", hmnlen: "30" },
    { hyr: "1443", hmn: "02", greg_date: "2021-09-08", dow: "3", hmnlen: "29" },
    { hyr: "1443", hmn: "03", greg_date: "2021-10-07", dow: "4", hmnlen: "30" },
    { hyr: "1443", hmn: "04", greg_date: "2021-11-06", dow: "6", hmnlen: "29" },
    { hyr: "1443", hmn: "05", greg_date: "2021-12-05", dow: "0", hmnlen: "30" },
    { hyr: "1443", hmn: "06", greg_date: "2022-01-04", dow: "2", hmnlen: "29" },
    { hyr: "1443", hmn: "07", greg_date: "2022-02-02", dow: "3", hmnlen: "30" },
    { hyr: "1443", hmn: "08", greg_date: "2022-03-04", dow: "5", hmnlen: "29" },
    { hyr: "1443", hmn: "09", greg_date: "2022-04-02", dow: "6", hmnlen: "30" },
    { hyr: "1443", hmn: "10", greg_date: "2022-05-02", dow: "1", hmnlen: "29" },
    { hyr: "1443", hmn: "11", greg_date: "2022-05-31", dow: "2", hmnlen: "30" },
    { hyr: "1443", hmn: "12", greg_date: "2022-06-30", dow: "4", hmnlen: "30" },
    { hyr: "1444", hmn: "01", greg_date: "2022-07-30", dow: "6", hmnlen: "29" },
    { hyr: "1444", hmn: "02", greg_date: "2022-08-28", dow: "0", hmnlen: "30" },
    { hyr: "1444", hmn: "03", greg_date: "2022-09-27", dow: "2", hmnlen: "29" },
    { hyr: "1444", hmn: "04", greg_date: "2022-10-26", dow: "3", hmnlen: "30" },
    { hyr: "1444", hmn: "05", greg_date: "2022-11-25", dow: "5", hmnlen: "30" },
    { hyr: "1444", hmn: "06", greg_date: "2022-12-25", dow: "0", hmnlen: "29" },
    { hyr: "1444", hmn: "07", greg_date: "2023-01-23", dow: "1", hmnlen: "29" },
    { hyr: "1444", hmn: "08", greg_date: "2023-02-21", dow: "2", hmnlen: "30" },
    { hyr: "1444", hmn: "09", greg_date: "2023-03-23", dow: "4", hmnlen: "29" },
    { hyr: "1444", hmn: "10", greg_date: "2023-04-21", dow: "5", hmnlen: "30" },
    { hyr: "1444", hmn: "11", greg_date: "2023-05-21", dow: "0", hmnlen: "29" },
    { hyr: "1444", hmn: "12", greg_date: "2023-06-19", dow: "1", hmnlen: "30" },
    { hyr: "1445", hmn: "01", greg_date: "2023-07-19", dow: "3", hmnlen: "29" },
    { hyr: "1445", hmn: "02", greg_date: "2023-08-17", dow: "4", hmnlen: "30" },
    { hyr: "1445", hmn: "03", greg_date: "2023-09-16", dow: "6", hmnlen: "30" },
    { hyr: "1445", hmn: "04", greg_date: "2023-10-16", dow: "1", hmnlen: "30" },
    { hyr: "1445", hmn: "05", greg_date: "2023-11-15", dow: "3", hmnlen: "29" },
    { hyr: "1445", hmn: "06", greg_date: "2023-12-14", dow: "4", hmnlen: "30" },
    { hyr: "1445", hmn: "07", greg_date: "2024-01-13", dow: "6", hmnlen: "29" },
    { hyr: "1445", hmn: "08", greg_date: "2024-02-11", dow: "0", hmnlen: "29" },
    { hyr: "1445", hmn: "09", greg_date: "2024-03-11", dow: "1", hmnlen: "30" },
    { hyr: "1445", hmn: "10", greg_date: "2024-04-10", dow: "3", hmnlen: "29" },
    { hyr: "1445", hmn: "11", greg_date: "2024-05-09", dow: "4", hmnlen: "29" },
    { hyr: "1445", hmn: "12", greg_date: "2024-06-07", dow: "5", hmnlen: "30" },
    { hyr: "1446", hmn: "01", greg_date: "2024-07-07", dow: "0", hmnlen: "29" },
    { hyr: "1446", hmn: "02", greg_date: "2024-08-05", dow: "1", hmnlen: "30" },
    { hyr: "1446", hmn: "03", greg_date: "2024-09-04", dow: "3", hmnlen: "30" },
    { hyr: "1446", hmn: "04", greg_date: "2024-10-04", dow: "5", hmnlen: "30" },
    { hyr: "1446", hmn: "05", greg_date: "2024-11-03", dow: "0", hmnlen: "29" },
    { hyr: "1446", hmn: "06", greg_date: "2024-12-02", dow: "1", hmnlen: "30" },
    { hyr: "1446", hmn: "07", greg_date: "2025-01-01", dow: "3", hmnlen: "30" },
    { hyr: "1446", hmn: "08", greg_date: "2025-01-31", dow: "5", hmnlen: "29" },
    { hyr: "1446", hmn: "09", greg_date: "2025-03-01", dow: "6", hmnlen: "29" },
    { hyr: "1446", hmn: "10", greg_date: "2025-03-30", dow: "0", hmnlen: "30" },
    { hyr: "1446", hmn: "11", greg_date: "2025-04-29", dow: "2", hmnlen: "29" },
    { hyr: "1446", hmn: "12", greg_date: "2025-05-28", dow: "3", hmnlen: "29" },
    { hyr: "1447", hmn: "01", greg_date: "2025-06-26", dow: "4", hmnlen: "30" },
    { hyr: "1447", hmn: "02", greg_date: "2025-07-26", dow: "6", hmnlen: "29" },
    { hyr: "1447", hmn: "03", greg_date: "2025-08-24", dow: "0", hmnlen: "30" },
    { hyr: "1447", hmn: "04", greg_date: "2025-09-23", dow: "2", hmnlen: "30" },
    { hyr: "1447", hmn: "05", greg_date: "2025-10-23", dow: "4", hmnlen: "30" },
    { hyr: "1447", hmn: "06", greg_date: "2025-11-22", dow: "6", hmnlen: "29" },
    { hyr: "1447", hmn: "07", greg_date: "2025-12-21", dow: "0", hmnlen: "30" },
    { hyr: "1447", hmn: "08", greg_date: "2026-01-20", dow: "2", hmnlen: "29" },
    { hyr: "1447", hmn: "09", greg_date: "2026-02-18", dow: "3", hmnlen: "30" },
    { hyr: "1447", hmn: "10", greg_date: "2026-03-20", dow: "5", hmnlen: "29" },
    { hyr: "1447", hmn: "11", greg_date: "2026-04-18", dow: "6", hmnlen: "30" },
    { hyr: "1447", hmn: "12", greg_date: "2026-05-18", dow: "1", hmnlen: "29" },
    { hyr: "1448", hmn: "01", greg_date: "2026-06-16", dow: "2", hmnlen: "29" },
    { hyr: "1448", hmn: "02", greg_date: "2026-07-15", dow: "3", hmnlen: "30" },
    { hyr: "1448", hmn: "03", greg_date: "2026-08-14", dow: "5", hmnlen: "29" },
    { hyr: "1448", hmn: "04", greg_date: "2026-09-12", dow: "6", hmnlen: "30" },
    { hyr: "1448", hmn: "05", greg_date: "2026-10-12", dow: "1", hmnlen: "30" },
    { hyr: "1448", hmn: "06", greg_date: "2026-11-11", dow: "3", hmnlen: "29" },
    { hyr: "1448", hmn: "07", greg_date: "2026-12-10", dow: "4", hmnlen: "30" },
    { hyr: "1448", hmn: "08", greg_date: "2027-01-09", dow: "6", hmnlen: "30" },
    { hyr: "1448", hmn: "09", greg_date: "2027-02-08", dow: "1", hmnlen: "29" },
    { hyr: "1448", hmn: "10", greg_date: "2027-03-09", dow: "2", hmnlen: "30" },
    { hyr: "1448", hmn: "11", greg_date: "2027-04-08", dow: "4", hmnlen: "29" },
    { hyr: "1448", hmn: "12", greg_date: "2027-05-07", dow: "5", hmnlen: "30" },
    { hyr: "1449", hmn: "01", greg_date: "2027-06-06", dow: "0", hmnlen: "29" },
    { hyr: "1449", hmn: "02", greg_date: "2027-07-05", dow: "1", hmnlen: "29" },
    { hyr: "1449", hmn: "03", greg_date: "2027-08-03", dow: "2", hmnlen: "30" },
    { hyr: "1449", hmn: "04", greg_date: "2027-09-02", dow: "4", hmnlen: "29" },
    { hyr: "1449", hmn: "05", greg_date: "2027-10-01", dow: "5", hmnlen: "30" },
    { hyr: "1449", hmn: "06", greg_date: "2027-10-31", dow: "0", hmnlen: "29" },
    { hyr: "1449", hmn: "07", greg_date: "2027-11-29", dow: "1", hmnlen: "30" },
    { hyr: "1449", hmn: "08", greg_date: "2027-12-29", dow: "3", hmnlen: "30" },
    { hyr: "1449", hmn: "09", greg_date: "2028-01-28", dow: "5", hmnlen: "29" },
    { hyr: "1449", hmn: "10", greg_date: "2028-02-26", dow: "6", hmnlen: "30" },
    { hyr: "1449", hmn: "11", greg_date: "2028-03-27", dow: "1", hmnlen: "30" },
    { hyr: "1449", hmn: "12", greg_date: "2028-04-26", dow: "3", hmnlen: "29" },
    { hyr: "1450", hmn: "01", greg_date: "2028-05-25", dow: "4", hmnlen: "30" },
    { hyr: "1450", hmn: "02", greg_date: "2028-06-24", dow: "6", hmnlen: "29" },
    { hyr: "1450", hmn: "03", greg_date: "2028-07-23", dow: "0", hmnlen: "30" },
    { hyr: "1450", hmn: "04", greg_date: "2028-08-22", dow: "2", hmnlen: "29" },
    { hyr: "1450", hmn: "05", greg_date: "2028-09-20", dow: "3", hmnlen: "29" },
    { hyr: "1450", hmn: "06", greg_date: "2028-10-19", dow: "4", hmnlen: "30" },
    { hyr: "1450", hmn: "07", greg_date: "2028-11-18", dow: "6", hmnlen: "29" },
    { hyr: "1450", hmn: "08", greg_date: "2028-12-17", dow: "0", hmnlen: "30" },
    { hyr: "1450", hmn: "09", greg_date: "2029-01-16", dow: "2", hmnlen: "29" },
    { hyr: "1450", hmn: "10", greg_date: "2029-02-14", dow: "3", hmnlen: "30" },
    { hyr: "1450", hmn: "11", greg_date: "2029-03-16", dow: "5", hmnlen: "30" },
    { hyr: "1450", hmn: "12", greg_date: "2029-04-15", dow: "0", hmnlen: "29" },
    { hyr: "1451", hmn: "01", greg_date: "2029-05-14", dow: "1", hmnlen: "30" },
    { hyr: "1451", hmn: "02", greg_date: "2029-06-13", dow: "3", hmnlen: "30" },
    { hyr: "1451", hmn: "03", greg_date: "2029-07-13", dow: "5", hmnlen: "29" },
    { hyr: "1451", hmn: "04", greg_date: "2029-08-11", dow: "6", hmnlen: "30" },
    { hyr: "1451", hmn: "05", greg_date: "2029-09-10", dow: "1", hmnlen: "29" },
    { hyr: "1451", hmn: "06", greg_date: "2029-10-09", dow: "2", hmnlen: "29" },
    { hyr: "1451", hmn: "07", greg_date: "2029-11-07", dow: "3", hmnlen: "30" },
    { hyr: "1451", hmn: "08", greg_date: "2029-12-07", dow: "5", hmnlen: "29" },
    { hyr: "1451", hmn: "09", greg_date: "2030-01-05", dow: "6", hmnlen: "30" },
    { hyr: "1451", hmn: "10", greg_date: "2030-02-04", dow: "1", hmnlen: "29" },
    { hyr: "1451", hmn: "11", greg_date: "2030-03-05", dow: "2", hmnlen: "30" },
    { hyr: "1451", hmn: "12", greg_date: "2030-04-04", dow: "4", hmnlen: "29" },
    { hyr: "1452", hmn: "01", greg_date: "2030-05-03", dow: "5", hmnlen: "30" },
    { hyr: "1452", hmn: "02", greg_date: "2030-06-02", dow: "0", hmnlen: "30" },
    { hyr: "1452", hmn: "03", greg_date: "2030-07-02", dow: "2", hmnlen: "30" },
    { hyr: "1452", hmn: "04", greg_date: "2030-08-01", dow: "4", hmnlen: "29" },
    { hyr: "1452", hmn: "05", greg_date: "2030-08-30", dow: "5", hmnlen: "30" },
    { hyr: "1452", hmn: "06", greg_date: "2030-09-29", dow: "0", hmnlen: "29" },
    { hyr: "1452", hmn: "07", greg_date: "2030-10-28", dow: "1", hmnlen: "29" },
    { hyr: "1452", hmn: "08", greg_date: "2030-11-26", dow: "2", hmnlen: "30" },
    { hyr: "1452", hmn: "09", greg_date: "2030-12-26", dow: "4", hmnlen: "06" },
  ];
  $.Tstooltip_hide_time = 0;
  $.Tstooltip_delay = 1000;
  $.TsDir = "rtl";
  $.TsFontfamily = "";
  $.No_Next_MonthAR_Text = "لا يوجد شهر تالي";
  $.No_Next_MonthEN_Text = "No Next Month found";
  $.No_Prev_MonthAR_Text = "لا يوجد شهر سابق";
  $.No_Prev_MonthEN_Text = "No prev Month found";
  $.TsWeakDayNames = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعه",
    "السبت",
  ];
  $.TsWeakDayNamesEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  $.TsGMonthARNames = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  $.TsGMonthENNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",

    "December",
  ];
  $.TsHMonthARNames = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادي الاولى",
    "جمادي الثانيه",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذوالقعدة",
    "ذو الحجة",
  ];
  $.TsHMonthENNames = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah"
  ];
  
  $.TsFtrNow = [
    {
      _GD_: "",
      _GM_: "",
      _GY_: "",
      _GDD_: "",
      _GMM_: "",
      _DW_: "",
      _GYY_: "",
      _GY4_: "",
      _HD_: "",
      _HM_: "",
      _HY_: "",
      _HDD_: "",
      _HMM_: "",
      _HYY_: "",
      _HY4_: "",
    },
  ];
  $.TsStrOut =
    "_DW_ الموافق _HDD_ من شهر _HMM_ عام _HY4_ هجريا &nbsp الموافق &nbsp _GY4_  من شهر _GMM_  عام  _GDD_ ميلاديا ";
  $.TsStrOutEN =
    "_DW_ Corresponding _HDD_ From Month _HMM_ Year _HY4_ Higri &nbsp Corresponding &nbsp _GY4_  From Month _GMM_  Year  _GDD_ Gregorian ";
});
