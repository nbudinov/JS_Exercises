var dbController = (function() {
	return {
		init: function() {
			return this;
		},

		saveReservation: function(sDate, eDate, money) {
			return new Promise(function(resolve, reject) {
				$.ajax({
					method: 'POST',
					url: 'http://localhost:1337/reservations',
					data: {
						"start_date": sDate,
						"end_date": eDate,
						"money": money
					}
				}).done(function(data) {
					resolve('success');
				});
			})
		},

		getReservations: function() {
			return new Promise(function(resolve, reject) {
				$.get('http://localhost:1337/reservations', function(data) {
					console.log('FROM DB ', data)
					resolve(data);
				})

			})
		}

	}
})();
