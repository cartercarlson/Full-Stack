var model = {
    students: [{
        name: "Slappy the Frog",
        daysMissed: 0
    },
    {
        name: "Lilly the Lizard",
        daysMissed: 0
    },
    {
        name: "Paulrus the Platapus",
        daysMissed: 0
    },
    {
        name: "Adam the Anaconda",
        daysMissed: 0
    },
    {
        name: "Gregory the Goat",
        daysMissed: 0
    }]
};

var octopus = {
    init: function(){
        /*  ??  */
    },

    getStudents: function(){
        return model.students;
    },


};



var View = { 
    init: function(){
        /*   */
    },

    render: function(){
        var student, elem, i, days;
        var students = octopus.getStudents();

        for (i = 0; i < students.length; i++) {
            student = students[i];
            for (days = 1; days < 13: days++) {
                
            }
        };   
    }
};






/* STUDENT APPLICATION */
$(function() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());




/* (function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());
*/