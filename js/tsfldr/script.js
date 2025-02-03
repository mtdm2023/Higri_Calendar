$(document).ready(function () {
  let records = [];
  let filteredArrFromDuplicates = [];
  var RecordsArray_Counter = 0;
  var Highlighted_day = 0;
  var tempTsHMonthARNames = [];
  var isToltip = false;
  var Base_RecordsArray_Counter = 0;
  let DateResult = $(".DateResult");
  const lastMonthText = $(".lastMonth");
  const nextMonthText = $(".nextMonth");
  const CurrentMonthText = $(".currentMonth");
  const CurrentSelectedYear = $(".currentYear");
  const CurrentSelectedMonth = $(".currentMonth");
  const calenderDays = $(".calender_days");
  const previousMonth = $(".prevBtn");
  const nextMonth = $(".nextBtn");
  const HegryYearList = $(".Hegry_yearList");
  const HegryMonthList = $(".Hegry_MonthList");
  const Language_Switcher = $(".Lang");

  readData();

  // Here Calender Builder
  function CalenderBuilder() {
    if ($.TsDir == "ltr") {
      $.TsHMonthARNames = $.TsHMonthENNames;
    }
    RotatArrws_rtl_ltr();
    InjectHeader_WeekNames();

    FirstFillHegryData();
    // here we update Output string values of current monthDate;
    Fill_Prev_AND_Next_Months_Days(
      RecordsArray_Counter,
      records[RecordsArray_Counter]["dow"],
      records[RecordsArray_Counter]["hmnlen"]
    );

    // here we call this function to set event listeners on years and month dropdown list items
    Year_Month_ClickHandler();

    // here  this function will interact with every day in calender
    Calender_Day_click_handler();
    init_AUSpopup();
    setFontFamily();
    RefreshCalenderAfter24_Hours_auto();
    $(Language_Switcher).on('click',()=>{
      $(Language_Switcher).attr('clicked','true');
      let lang_text = $(Language_Switcher).text();
      if(lang_text == 'AR')
      {
        tempTsHMonthARNames = $.TsHMonthARNames 
        $.TsHMonthARNames = $.TsHMonthENNames;
        LanguageSwitch ('ltr');
        $(Language_Switcher).text('EN');
       
      }
      else
      {
        $.TsHMonthARNames = tempTsHMonthARNames;
        $.TsDir = 'rtl';
        $('HTML').attr('Dir','rtl');
        LanguageSwitch ('rtl');
        $(Language_Switcher).text('AR');
       
      }
      
    })
  }

  // Here First call of calender
  function FirstFillHegryData() {
    calenderDays.children().not(".HegryCalenderHeder").empty();
    InjectHeader_WeekNames();
    const notDuplicatedYears_ARR = records.filter((record, index, arr) => {
      return index === 0 || record["hyr"] !== arr[index - 1]["hyr"];
    });
    notDuplicatedYears_ARR.forEach((record, index) => {
      HegryYearList.append(
        `<li><a class="year_item dropdown-item" href="#" role="menuitem">${record["hyr"]}</a></li>`
      );
    });
    HegryMonthList.empty();
    $.TsHMonthARNames.forEach((M_name) => {
      HegryMonthList.append(
        `<li><a class="month_item dropdown-item" href="#" role="menuitem">${M_name}</a></li>`
      );
    });
    const currentDate = getCurrentDate();
    const dateNow_array = currentDate.split("/");
    RecordsArray_Counter = records.findIndex(
      (record) =>
        record.greg_date.split("/")[2] === dateNow_array[2] &&
        record.greg_date.split("/")[0].padStart(2, "0") === dateNow_array[1]
    );
    if(RecordsArray_Counter == -1)
    {
      RecordsArray_Counter = records.findIndex(
        (record) =>
          record.greg_date.split("/")[2] === dateNow_array[2] &&
        String(parseInt(record.greg_date.split("/")[0], 10) - 1).padStart(2, "0") === dateNow_array[1]

      );
      RecordsArray_Counter = RecordsArray_Counter-1 
    }
    // here we check if this this greg day is the last day in this month

    const month = parseInt(dateNow_array[0], 10) - 1; 
    const day = parseInt(dateNow_array[1], 10);
    const year = parseInt(dateNow_array[2], 10);

    // Create a Date object
    const date = new Date(year, month, day);

    // Check if the next day is the first day of the next month
    const nextDay = new Date(year, month, day + 1);

    if (nextDay.getMonth() !== month && records[ RecordsArray_Counter+1]['greg_date'].split("/")[2] ==records[ RecordsArray_Counter]['greg_date'].split("/")[2]) {
      RecordsArray_Counter = RecordsArray_Counter+1; 
    } 
    Base_RecordsArray_Counter = RecordsArray_Counter;
    CurrentSelectedYear.text(records[RecordsArray_Counter]["hyr"]);
    FillHegryDate(
      records[RecordsArray_Counter]["hyr"],
      records[RecordsArray_Counter]["hmn"],
      records[RecordsArray_Counter]["hmnlen"],
      records[RecordsArray_Counter]["dow"]
    );
    // here we get the current hegry day that is corresponding to current gregorian date
    RefreshCalender();
    highlightOnCurrentHegryDay();

    Get_HegryData_Gregdate_According_2_SelectedDay(
      null,
      $(".CalenderDay").not('.inactive').eq(Highlighted_day).text()
      ,
      records[RecordsArray_Counter]["hmn"],
      records[RecordsArray_Counter]["hyr"],
      $.TsWeakDayNames[
        get_indexof_selectedDay($($(".CalenderDay")[Highlighted_day]).text())
      ],
      isToltip
    );
  }
  // this function is responsble for fill table with days of Hegry or Graegory month
  function FillHegryDate(Hyear, HegryMonth, HegryMonthLength, startDay) {
    $.TsFtrNow[0]["_DW_"] = startDay;
    let MonthLengthCounter = 1;
    let firstStart = true;
    while (MonthLengthCounter <= HegryMonthLength) {
      const Row = $("<tr>");
      for (let i = 0; i <= 6; i++) {
        if (i < startDay && firstStart != false) {
          const rowData = $("<td>", { class: "inactive" });

          Row.append(rowData);
        }
        if (i >= startDay || firstStart == false) {
          if (MonthLengthCounter <= HegryMonthLength) {
            const rowData = $("<td>", {
              class: "CalenderDay",
              text: MonthLengthCounter++,
            });
            rowData.attr("data-bs-toggle", "tooltip");
            rowData.attr("data-bs-placement", "top");
            rowData.attr("data-bs-custom-class", "custom-tooltip");

            Row.append(rowData);
          }
          firstStart = false;
        }
      }
      calenderDays.append(Row);
    }
    Fill_Prev_AND_Next_Months_Days(
      RecordsArray_Counter,
      startDay,
      HegryMonthLength
    );
  }

  function RefreshCalender() {
    $.TsFtrNow[0]["_HY4_"] = records[RecordsArray_Counter]["hyr"];
    $.TsFtrNow[0]["_HMM_"] = records[RecordsArray_Counter]["hmn"];

    CurrentMonthText.text(
      $.TsHMonthARNames[records[RecordsArray_Counter]["hmn"] - 1]
    );
    nextMonthText.text(
      $.TsHMonthARNames[records[RecordsArray_Counter + 1]["hmn"] - 1]
    );

    lastMonthText.text(
      $.TsHMonthARNames[
        records[
          RecordsArray_Counter - 1 != -1
            ? RecordsArray_Counter - 1
            : RecordsArray_Counter
        ]["hmn"] - 1
      ]
    );
    Fill_Prev_AND_Next_Months_Days(
      RecordsArray_Counter,
      records[RecordsArray_Counter]["dow"],
      records[RecordsArray_Counter]["hmnlen"]
    );

    next_prevCalnderBtnsHandler();

    // here we call this function to set event listeners on years dropdown list items
    Year_Month_ClickHandler();

    // here  this function will interact with every day in calender
    Calender_Day_click_handler();
  }
  function next_prevCalnderBtnsHandler() {
    previousMonth.on("click", (e) => {
      if (RecordsArray_Counter > 0) {
        RecordsArray_Counter--;
      }

      calenderDays.children().not(".HegryCalenderHeder").remove();

      FillHegryDate(
        records[RecordsArray_Counter]["hyr"],
        records[RecordsArray_Counter]["hmn"],
        records[RecordsArray_Counter]["hmnlen"],
        records[RecordsArray_Counter]["dow"]
      );

      CurrentMonthText.text(
        $.TsHMonthARNames[records[RecordsArray_Counter]["hmn"] - 1]
      );

      const nextIndex = RecordsArray_Counter + 1;
      if (nextIndex < records.length) {
        nextMonthText.text($.TsHMonthARNames[records[nextIndex]["hmn"] - 1]);
      } else {
        nextMonthText.text($.TsDir == "rtl" ?   $.No_Next_MonthAR_Text  : $.No_Next_MonthEN_Text );
      }

      const prevIndex = RecordsArray_Counter - 1;
      if (prevIndex >= 0) {
        lastMonthText.text($.TsHMonthARNames[records[prevIndex]["hmn"] - 1]);
      } else {
        lastMonthText.text($.TsDir == "rtl" ?   $.No_Prev_MonthAR_Text  : $.No_Prev_MonthEN_Text );
      }
      $.TsFtrNow[0]["_HY4_"] = records[RecordsArray_Counter]["hyr"];
      $.TsFtrNow[0]["_HMM_"] = records[RecordsArray_Counter]["hmn"];
      CurrentSelectedYear.text(records[RecordsArray_Counter]["hyr"]);

      Calender_Day_click_handler();
      highlightOnCurrentHegryDay();
    });

    nextMonth.on("click", (e) => {
 
      if (RecordsArray_Counter < records.length - 1) {
        ++RecordsArray_Counter;
      }

      calenderDays.children().not(".HegryCalenderHeder").remove();
      FillHegryDate(
        records[RecordsArray_Counter]["hyr"],
        records[RecordsArray_Counter]["hmn"],
        records[RecordsArray_Counter]["hmnlen"],
        records[RecordsArray_Counter]["dow"]
      );

      CurrentMonthText.text(
        $.TsHMonthARNames[records[RecordsArray_Counter]["hmn"] - 1]
      );

   
      const nextIndex = RecordsArray_Counter + 1;
      if (nextIndex < records.length) {
        nextMonthText.text($.TsHMonthARNames[records[nextIndex]["hmn"] - 1]);
      } else {
        nextMonthText.text($.TsDir == "rtl" ?   $.No_Next_MonthAR_Text  : $.No_Next_MonthEN_Text );
      }

   
      const prevIndex = RecordsArray_Counter - 1;
      if (prevIndex >= 0) {
        lastMonthText.text($.TsHMonthARNames[records[prevIndex]["hmn"] - 1]);
      } else {
        lastMonthText.text($.TsDir == "rtl" ?   $.No_Prev_MonthAR_Text  : $.No_Prev_MonthEN_Text );
      }
      $.TsFtrNow[0]["_HY4_"] = records[RecordsArray_Counter]["hyr"];
      $.TsFtrNow[0]["_HMM_"] = records[RecordsArray_Counter]["hmn"];
      CurrentSelectedYear.text(records[RecordsArray_Counter]["hyr"]);

      // Handle day click event
      Calender_Day_click_handler();
      highlightOnCurrentHegryDay();
    });
  }

  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }
  // function to set event listeners on years dropdown list items
  function Year_Month_ClickHandler() {
    const year = $(".year_item");
    let Current_Selected_year = null;
    const month = $(".month_item");
    let Current_Selected_month = null;
    year.on("click", function (e) {
      Current_Selected_year = $(e.target).text();
      CurrentSelectedYear.text(Current_Selected_year);
      fill_selectedYearMonth_in_Calender(
        CurrentSelectedYear.text(),
        CurrentSelectedMonth.text()
      );
    });

    month.on("click", function (e) {
      Current_Selected_month = $(e.target).text();
      CurrentSelectedMonth.text(Current_Selected_month);
      fill_selectedYearMonth_in_Calender(
        CurrentSelectedYear.text(),
        CurrentSelectedMonth.text()
      );
    });
  }

  function fill_selectedYearMonth_in_Calender(
    currentSelectedYear,
    CurrentSelectedMonth
  ) {
    let index = records.findIndex(
      (value) =>
        value["hyr"] == currentSelectedYear &&
        $.TsHMonthARNames[value["hmn"] - 1] == CurrentSelectedMonth
    );
    RecordsArray_Counter = index;
    calenderDays.children().not(".HegryCalenderHeder").remove();

    CurrentMonthText.text(
      $.TsHMonthARNames[records[RecordsArray_Counter]["hmn"] - 1]
    );
    const nextIndex = RecordsArray_Counter + 1;
    if (nextIndex < records.length) {
      nextMonthText.text($.TsHMonthARNames[records[nextIndex]["hmn"] - 1]);
    } else {
      nextMonthText.text($.TsDir == "rtl" ?   $.No_Next_MonthAR_Text  : $.No_Next_MonthEN_Text );
    }
    const prevIndex = RecordsArray_Counter - 1;
    if (prevIndex >= 0) {
      lastMonthText.text($.TsHMonthARNames[records[prevIndex]["hmn"] - 1]);
    } else {
      lastMonthText.text($.TsDir == "rtl" ?   $.No_Prev_MonthAR_Text  : $.No_Prev_MonthEN_Text );
    }
    $.TsFtrNow[0]["_HY4_"] = records[RecordsArray_Counter]["hyr"];
    $.TsFtrNow[0]["_HMM_"] = records[RecordsArray_Counter]["hmn"];
    CurrentSelectedYear.text(records[RecordsArray_Counter]["hyr"]);
    FillHegryDate(
      records[RecordsArray_Counter]["hyr"],
      records[RecordsArray_Counter]["hmn"],
      records[RecordsArray_Counter]["hmnlen"],
      records[RecordsArray_Counter]["dow"]
    );
    Calender_Day_click_handler();
    highlightOnCurrentHegryDay();
  }
  // Days Click handler in the calender
  function Calender_Day_click_handler() {
    $(".CalenderDay").on("click", (e) => {
      $(".CalenderDay").removeClass("highlight");
      $(e.target).addClass("highlight");
      Get_HegryData_Gregdate_According_2_SelectedDay(
        e.target,
        $(e.target).text(),
        $.TsFtrNow[0]["_HMM_"],
        $.TsFtrNow[0]["_HY4_"],
        records[RecordsArray_Counter]["dow"],
        isToltip
      );
    });
    $(".CalenderDay").on("mouseenter", (e) => {
      $(".CalenderDay").removeClass("Mousehighlight");
      $(e.target).addClass("Mousehighlight");
      Get_HegryData_Gregdate_According_2_SelectedDay(
        e.target,
        $(e.target).text(),
        $.TsFtrNow[0]["_HMM_"],
        $.TsFtrNow[0]["_HY4_"],
        records[RecordsArray_Counter]["dow"],
        !isToltip
      );
    });
    $(".CalenderDay").on("mouseleave", (e) => {
      $(e.target).removeClass("Mousehighlight");
    });
  }
  // this function will set footer string
  function Get_HegryData_Gregdate_According_2_SelectedDay(
    targetElement,
    SelectedDay,
    CurrentMonth,
    currentYear,
    startDay,
    isToltip
  ) {
    // Filter the records to get the current Gregorian date for the Hijri date
    let CurrentGregDate = records.filter(
      (record) => record["hmn"] == CurrentMonth && record["hyr"] == currentYear
    );

    // Calculate the corresponding Gregorian date
    const correspondingGregDate = addDaysToDate(
      CurrentGregDate[0]["greg_date"],
      parseInt(SelectedDay, 10) - 1
    );
    const [day, month, year] = correspondingGregDate.split("/");
    $.TsFtrNow._DW_ =  $.TsDir == "rtl" ? $.TsWeakDayNames[get_indexof_selectedDay(SelectedDay)]   : $.TsWeakDayNamesEN[get_indexof_selectedDay(SelectedDay)]  ;
    $.TsFtrNow._GDD_ = day;
    $.TsFtrNow._GMM_ = month;
    $.TsFtrNow._GY4_ = year;

    $.TsFtrNow._HDD_ = SelectedDay;
    $.TsFtrNow._HMM_ = CurrentMonth;
    $.TsFtrNow._HY4_ = currentYear;
    if (isToltip == false) {
      let newUOutString = $.TsDir == "rtl" ?   $.TsStrOut  : $.TsStrOutEN  ;
      Object.keys($.TsFtrNow).forEach((key) => {
        newUOutString = newUOutString.replaceAll(key, $.TsFtrNow[key] || "");
      });

      // Update the result in the HTML
      DateResult.empty().html(`${newUOutString}`);
    } else {
      // Update the tooltip content
      $(targetElement).attr(
        "data-bs-title",
        `${$.TsFtrNow._GDD_}/${$.TsFtrNow._GMM_}/${$.TsFtrNow._GY4_}-${$.TsFtrNow._HY4_}/${$.TsFtrNow._HMM_}/${$.TsFtrNow._HDD_}`
      );

      bootstrap.Tooltip.getInstance(targetElement)?.dispose();
      new bootstrap.Tooltip(targetElement, {
        placement: "top",
        trigger: "hover",
        customClass: "custom-tooltip",
        trigger: "hover focus",
        delay: { show: $.Tstooltip_delay, hide: $.Tstooltip_hide_time },
      });
      bootstrap.Tooltip.getInstance(targetElement)?.show();
    }
  }
  function get_indexof_selectedDay(SelectedDay) {
    let currentSelectedIndex = -1;

    $(".calender_days")
      .find("tr")
      .each(function (rowIndex, tr) {
        $(tr)
          .find("td")
          .each(function (cellIndex, td) {
            if (
              SelectedDay === $(td).text().trim() &&
              !$(td).hasClass("inactive")
            ) {
              currentSelectedIndex = cellIndex;
              return false;
            }
          });
        if (currentSelectedIndex !== -1) return false;
      });

    return currentSelectedIndex;
  }

  // this function add days to greg date
  function addDaysToDate(dateString, daysToAdd) {
    const [month, day, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    // Add the specified number of days
    date.setDate(date.getDate() + daysToAdd);

    // here i splite date to components to formate it as i wish
    const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    const newDay = date.getDate().toString().padStart(2, "0");
    const newYear = date.getFullYear();

    // here in next step we will add here function to return this date with our formate as we wish
    return `${newYear}/${newMonth}/${newDay}`;
  }
  function Fill_Prev_AND_Next_Months_Days(
    Current_DataArray_counter,
    CurrentMonthStartDay
  ) {
    // Get the current record
    const currentRecord = records[Current_DataArray_counter];

    // Previous month days
    const prevRecord =
      Current_DataArray_counter > 0
        ? records[Current_DataArray_counter - 1]
        : null;
    const prevMonthDays = prevRecord ? prevRecord.hmnlen : 0;

    // Start filling previous month's days
    if (CurrentMonthStartDay > 0 && prevMonthDays > 0) {
      const prevDaysToShow = [];
      for (let i = CurrentMonthStartDay - 1; i >= 0; i--) {
        const day = prevMonthDays - i;
        prevDaysToShow.push(`${day}`);
      }

      // Here wee append the previous month's days to the first row
      const firstRow = calenderDays.find("tr").eq(1).find("td.inactive");
      firstRow.each((index, td) => {
        $(td).text(prevDaysToShow[index]);
      });
    }

    // Next month days
    const LastRow_tds = calenderDays.find("tr").last().find("td");
    const remaining_NextMonthDays = 6 - parseInt(LastRow_tds.length - 1);
    const lastRow = calenderDays.find("tr").last();
    for (let i = 1; i <= remaining_NextMonthDays; i++) {
      lastRow.append($("<td>", { class: "inactive", text: i }));
    }
  }
  function highlightOnCurrentHegryDay() {
    let currentDate = getCurrentDate();
    let dateNow_array = currentDate.split("/");
    let currentrecord = records[RecordsArray_Counter];
    let gregstartDate_day = currentrecord["greg_date"].split("/")[1];
    let Hegryoffset = dateNow_array[0] - parseInt(gregstartDate_day);
    if(Hegryoffset < 0)
    {
      Hegryoffset = dateNow_array[0];
    }
    Highlighted_day = Hegryoffset;
    if (RecordsArray_Counter === Base_RecordsArray_Counter) {
      $(".CalenderDay").removeClass("active");
      $(".CalenderDay").not('.inactive').eq(Hegryoffset).addClass("active");

    }
  }

  async function readData() {
    try {
      // Convert and format recordss
      recordss = $.CalCSVData.map((row) => ({
        hyr: row["hyr"],
        hmn: row["hmn"],
        hmnlen: row["hmnlen"],
        greg_date: row["greg_date"]
          ? new Date(row["greg_date"]).toLocaleDateString()
          : null,
        dow: row["dow"],
      }));

      for (let index = 0; index < recordss.length; index++) {
        const current = recordss[index];
        const next = recordss[index + 1];

        if (next && current["hmn"] === next["hmn"]) {
          const maxObject = Math.max(current["hmnlen"], next["hmnlen"]);

          if (current["hmnlen"] === maxObject) {
            filteredArrFromDuplicates.push(current);
          } else {
            filteredArrFromDuplicates.push(next);
          }

          index++;
        } else {
          filteredArrFromDuplicates.push(current);
        }
      }

      records = filteredArrFromDuplicates;
      CalenderBuilder();
    } catch (error) {
      console.error("Error reading Data:", error);
    }
  }
  function init_AUSpopup() {
    const $infoButton = $("#infoButton");
    const $popupMessage = $("#popupMessage");
    const $closeButton = $("#closeButton");

    // Show the popup with the "show" class
    $infoButton.on("click", function () {
      $popupMessage.addClass("show");
    });

    // Close the popup by removing the "show" class
    $closeButton.on("click", function () {
      $popupMessage.removeClass("show");
    });

    // Optional: Close the popup when clicking outside the content
    $popupMessage.on("click", function (event) {
      if ($(event.target).is($popupMessage)) {
        $popupMessage.removeClass("show");
      }
    });
  }
  function InjectHeader_WeekNames() {
    const headerRow = $(".HegryCalenderHeder");
    headerRow.empty();
    if ($.TsDir == "rtl") {
     

      $.TsWeakDayNames.forEach(function (day) {
        const th = $("<th>").addClass("hegryDay").text(day);
        headerRow.append(th);
      });
    } else {

      $.TsWeakDayNamesEN.forEach(function (day) {
        const th = $("<th>").addClass("hegryDay").text(day);
        headerRow.append(th);
      });
    }
  }
  function setFontFamily() {
    $("html").css(
      "font-family",
      $.TsFontfamily.trim() === "" ? "inherit" : $.TsFontfamily
    );
  }
  function RotatArrws_rtl_ltr() {
    $(".prevBtn, .nextBtn").each(function () {
      if ($.TsDir === "ltr") {
          $(this).addClass("rotate180").removeClass("reset_rotate"); // Ensure classes are managed properly
      } else if ($(Language_Switcher).attr("clicked") === "true" && $.TsDir === "rtl") {
          $(this).removeClass("rotate180").addClass("reset_rotate");
      }
  });
  
  }
  function executeCode() {
 
    RefreshCalender();
}
function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Set to next midnight
  return midnight - now; // Time difference in milliseconds

}

  function RefreshCalenderAfter24_Hours_auto() {

  // Run the code at midnight and then every 24 hours
  setTimeout(() => {
      executeCode();
      setInterval(executeCode, 24 * 60 * 60 * 1000); // Repeat every 24 hours
  
  }, getTimeUntilMidnight());
  
     
  }
  function LanguageSwitch(DIR) {
    const HTMLDir = $('HTML').attr('Dir');
    if(DIR =="rtl" && HTMLDir =='rtl')
    {
       $.TsDir = 'rtl';
       $('HTML').attr('Dir','rtl');
       FirstFillHegryData();
       RotatArrws_rtl_ltr();
    }
    else
    {
      $.TsDir = 'ltr';
      $('HTML').attr('Dir','ltr');
      FirstFillHegryData();
      RotatArrws_rtl_ltr();
    
      
    }
    }
});
