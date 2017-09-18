var adminController = (function() {
	return {
		init: function() {
			return this;
		},

		handleReservation: function() {
			$.get('templates/admin.html', function(data)
			{
				$('#content').html(data);
			}).then(function() {
				$('#loadReservationsButt').on('click', function() {
					resController.listAllReservations();
				})

				$('#pWeekDayPr').append(' Current: ' + resController.weekDayPrice);
				$('#pWeekendDayPr').append(' Current: ' + resController.weekendDayPrice);

				$('#setPricesButt').on('click', function() {
					var weekDayPr = $('#weekDayPriceSetter').val() || resController.weekDayPrice;
					var weekendDayPr = $('#weekendDayPriceSetter').val() || resController.weekendDayPrice;

					resController.weekDayPrice = weekDayPr;
					resController.weekendDayPrice = weekendDayPr;
				})
			});
		}
	}
})();
