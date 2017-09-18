var reservationsController = (function() {

	return {
		init: function() {
			this.weekDayPrice = 20;
			this.weekendDayPrice = 30;
			return this;
		},

		getPeriodPrice: function(startDate, endDate) {
			var days = this.getDays(startDate, endDate);

			var price = days.weekDays*this.weekDayPrice + days.weekendDays*this.weekendDayPrice;

			return price;
		},

		getDays: function(startDate, endDate) {
			var weekDays = 0,
				weekendDays = 0;

			d1 = new Date(startDate);
			d2 = new Date(endDate);

		    while(d1<=d2){
				if((d1.getUTCDay()) === 0 || (d1.getUTCDay()) === 6)
				{
					weekendDays++;
				} else {
					weekDays++;
				}
		        d1.setDate(d1.getDate() + 1);
		    }
			return {
				weekDays: weekDays,
				weekendDays: weekendDays
			}
		},

		makeReservation: function(startDate, endDate, price)
		{
			db.saveReservation(startDate, endDate, price)
				.then(function(data) {
					$.notify('Successfully made reservation', 'success');
				})
		},

		checkIfDatesBusy: function(startDate, endDate) {
			return new Promise(function(resolve, reject) {
				db.getReservations()
					.then(function(rows) {
							rows.forEach(function(row) {
								var sDate = new Date(startDate),
									sDateServer = new Date(row.start_date.slice(0, 10)) ,
									eDate = new Date(endDate),
									eDateServer = new Date(row.end_date.slice(0, 10)) ;

									if(
										(sDate.getTime() >= (sDateServer.getTime() + (24 * 60 * 60 * 1000)) &&
										sDate.getTime() <= (eDateServer.getTime()) + (24 * 60 * 60 * 1000) )||
										(eDate.getTime() >= (sDateServer.getTime() + (24 * 60 * 60 * 1000) )&&
										eDate.getTime() <= (eDateServer.getTime() + (24 * 60 * 60 * 1000)))
									) {
										resolve(true);
									}
							})
							resolve(false);
						})
					})
		},

		listAllReservations: function() {
			db.getReservations()
				.then(function(rows) {
					$('#reservationsList').empty();
					rows.forEach(function(row) {
						$('#reservationsList').append(
							$('<li>').append(
								$('<a>').attr('id', row.id).append(
									'  start_date:  ' + row.start_date.slice(0,10) +
									'  end_date:  ' + row.end_date.slice(0,10) +
									'  money: '  + row.money
								)
							)
						)
					})
				})
		}

	}
})();
