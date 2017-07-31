
    $('.selectpicker').ready(function () {

        console.log('selectpicker is ready');

        var countries = ['Country1', 'Country2', 'Country2'];

        countries.reverse();

        countries.reverse().forEach(function (city) {
            addValue(city);
        });

        $('.selectpicker').selectpicker("refresh");


        // var value = '';
        $('.bs-searchbox > input').on('input', function (event) {
            $('.selectpicker').selectpicker({
                noneResultsText: 'press \'Enter\' to select \'' + event.currentTarget.value + '\''
            });
        });

        $('.bs-searchbox > input').on('keydown', function (event) {
            if(event.key == 'Enter') {
                console.log(event);
                addValue(event.currentTarget.value);
                $('.selectpicker').selectpicker("refresh");
            }
        });

        function addValue(value) {
            $('.selectpicker').append('<option value="'+value+'" selected="">'+value+'</option>');
        }


    });