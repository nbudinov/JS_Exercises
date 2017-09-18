var usersController = (function() {
	return {
		init: function() {
			return this;
		},

		handleReservation: function() {
			$.get('templates/reservations.html', function(data)
			{
				$('#content').html(data);
			}).then(function()
			{
				var startD, endD;

				$( "#startDate" ).datepicker({ dateFormat: 'yy-mm-dd' });
				$( "#endDate" ).datepicker({ dateFormat: 'yy-mm-dd' });

				$('#check').change(function() {
					if(this.checked) {
						$('#pEndDate').hide();
						endD = startD;
					}
					else {
						$('#pEndDate').show();
					}
				});

				$('#startDate, #endDate').on('change', function() {
					startD = $('#startDate').val();

					if(document.getElementById('check').checked) {
						endD = startD;
					} else
						endD = $('#endDate').val();
					var price = resController.getPeriodPrice(startD, endD);
					$('#price').html('Price: ' + price);
				})

				$('#reserveButt').click(function()
				{
					var startDate = $('#startDate').val(),
						price,
						endDate;

					if(document.getElementById('check').checked) {
						endDate = startDate;
					} else {
						endDate = $('#endDate').val();
						if(startDate > endDate) {
							$.notify('End date can not be earlier than start date', 'error');
							return;
						}
					}

					var sDate = new Date("2016-10-16"),
						sDateServer = new Date("2016-10-10");
						eDate = new Date("2016-10-19"),
						eDateServer = new Date("2016-10-16");
						console.log(

								(sDate.getTime() >= sDateServer.getTime() &&
								sDate.getTime() <= eDateServer.getTime()) ||
								(eDate.getTime() >= sDateServer.getTime() &&
								eDate.getTime() <= eDateServer.getTime())

						);
					if(startDate != '' && endDate != '' )
					{
						resController.checkIfDatesBusy(startDate, endDate)
							.then(function(busy) {
								if(busy) {
									$.notify('Busy dates. Please choose new dates', 'error');
								} else {
									price = resController.getPeriodPrice(startD, endD);
									resController.makeReservation(startDate, endDate, price);
								}
							})
					} else {
						$.notify('Please select dates', 'error');
					}

				})
			});
		}
	}
})();
