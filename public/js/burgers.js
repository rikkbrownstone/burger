$(function() {
	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		var newDevoured = $(this).data("newdevoured");

		var newDevouredState = {
			devoured: newDevoured
		};

		// Update devoured state with PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
			function() {
				console.log("changed devoured to", newDevoured);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#br").val().trim(),
			devoured: $("[name=devoured]:checked").val()
		};

		// Create new burger with POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	// Delete a burger with DELETE request.
	$(".delete-burger").on("click", function(event) {
		var id = $(this).data("id");

		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(
			function() {
				console.log("deleted burger", id);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
});