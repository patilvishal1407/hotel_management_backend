exports.create = async (req, res, next) => {
	const createdOn = getCreated_on(req)
	console.log("getDate57", createdOn)
	const istDate = moment.tz(createdOn, 'Asia/Kolkata');
	const modifiedDate = istDate.subtract({ hours: 5, minutes: 30 }).format('YYYY-MM-DD HH:mm');
	const futureModifiedDate = moment(modifiedDate).add(100, 'years');

	try {
		if ('image' in req.body) {
			console.log("1")

			let CenterData = {
				center_name: req.body.center_name,
				started_on: req.body.started_on,
				// center_ends_on: req.body.center_ends_on,
				// project_id: req.body.project_id,
				mobile: req.body.mobile,
				email: req.body.email,
				pincode: req.body.pincode,
				latitude: req.body.latitude,
				longitude: req.body.longitude,
				// location_map: req.body.location_map,
				// address: req.body.address,
				house_no: req.body.house_no,
				street: req.body.street,
				area: req.body.area,
				city: req.body.city,
				location_type_id: req.body.location_type_id,
				center_frequency_id: req.body.center_frequency_id,
				type_of_center_id: req.body.type_of_center_id,
				// picture: req.body.getImageurl,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by,
			}

			if (req.body.center_ends_on) {
				const centerEndsOnDate = new Date(req.body.center_ends_on);
				if (!isNaN(centerEndsOnDate)) {
					CenterData.center_ends_on = centerEndsOnDate.toISOString().slice(0, 10);
				} else {
					// Invalid date format, you can handle the error or omit this field if desired
					console.log('Invalid center_ends_on date format:', req.body.center_ends_on);
				}
			}

			console.log("2")
			const data = await model.insert(CenterData);

			let famousPerson = {
				center_id: data[0].center_id,
				is_name_used_to_center: "false",
			}

			const famous_person_data = await model.PersonCenter(req.body.center_name, famousPerson);
			console.log("famous_person_data", famous_person_data);
			console.log("data73", data)
			const employeesId = req.body.employees;
			const employees = employeesId.split(",");
			// console.log("76employees", employees)
			for (let i = 0; i < employees.length; i++) {
				const Center_Employees = {
					center_id: data[0].center_id,
					employee_id: employees[i],
					status: req.body.status,
					created_on: createdOn,
					created_by: req.body.created_by,
					modified_on: createdOn,
					modified_by: req.body.modified_by,
				}
				await center_employees_model.insert(Center_Employees);
				console.log("82Employee  data", Center_Employees)
			}

			const BatchesData = {
				batch_name: req.body.center_name,
				center_id: data[0].center_id,
				batches_start_on: createdOn,
				batches_ends_on: futureModifiedDate.format('YYYY-MM-DD HH:mm'),
				daily_start_time: createdOn,
				financial_year: 162,
				daily_end_time: createdOn,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			const batches = await batchesModel.insert(BatchesData);
			console.log("batches1234", batches);

			const batchId = batches[0].batch_id;
			console.log("batchId only id", batchId)

			const Batch_instructor = {
				batch_id: batchId,
				instructor_id: req.body.modified_by,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			const newbatchinstructor = await batch_instructor_model.insert(Batch_instructor);

			const Batch_course = {
				batch_id: batchId,
				course_id: 1,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			console.log("4");
			const famous_person_details = await model.PersonCenter_detail(data[0].center_id);
			const newbatchcourse = await batch_courses_model.insert(Batch_course);
			// }
			if (data) {
				res.status(StatusCodes.OK).send({ status: true, message: "Center has been created successfully", data: data, famous_person_details });
			} else {
				res.status(StatusCodes.OK).send({ status: false, message: "Something went wrong.Please try again later." });
			}
		} else {
			let CenterData = {
				center_name: req.body.center_name,
				started_on: req.body.started_on,
				// center_ends_on: req.body.center_ends_on,
				// project_id: req.body.project_id,
				mobile: req.body.mobile,
				email: req.body.email,
				pincode: req.body.pincode,
				// location_map: req.body.location_map,
				// address: req.body.address,
				latitude: req.body.latitude,
				longitude: req.body.longitude,
				house_no: req.body.house_no,
				street: req.body.street,
				area: req.body.area,
				city: req.body.city,
				location_type_id: req.body.location_type_id,
				center_frequency_id: req.body.center_frequency_id,
				type_of_center_id: req.body.type_of_center_id,
				// picture: req.body.getImageurl,
				picture: req.body.picture,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by,
			}

			if (req.body.center_ends_on) {
				const centerEndsOnDate = new Date(req.body.center_ends_on);
				if (!isNaN(centerEndsOnDate)) {
					CenterData.center_ends_on = centerEndsOnDate.toISOString().slice(0, 10);
				} else {
					// Invalid date format, you can handle the error or omit this field if desired
					console.log('Invalid center_ends_on date format:', req.body.center_ends_on);
				}
			}
			console.log("2")
			const data = await model.insert(CenterData);
			console.log("data73", data)
			let famousPerson = {
				center_id: data[0].center_id,
				is_name_used_to_center: "false",
			}

			const famous_person_data = await model.PersonCenter(req.body.center_name, famousPerson);
			console.log("famous_person_data", famous_person_data);
			const employeesId = req.body.employees;
			const employees = employeesId.split(",");
			// console.log("76employees", employees)

			for (let i = 0; i < employees.length; i++) {
				const Center_Employees = {
					center_id: data[0].center_id,
					employee_id: employees[i],
					status: req.body.status,
					created_on: createdOn,
					created_by: req.body.created_by,
					modified_on: createdOn,
					modified_by: req.body.modified_by,
				}
				await center_employees_model.insert(Center_Employees);
				console.log("82Employee  data", Center_Employees)
			}
			const BatchesData = {
				batch_name: req.body.center_name,
				center_id: data[0].center_id,
				batches_start_on: createdOn,
				batches_ends_on: futureModifiedDate.format('YYYY-MM-DD HH:mm'),
				daily_start_time: createdOn,
				financial_year: 162,
				daily_end_time: createdOn,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			const batches = await batchesModel.insert(BatchesData);
			console.log("batches1234", batches[0].batch_id);

			const batchId = batches[0].batch_id;
			console.log("batchId only id", batchId)
			const Batch_instructor = {
				batch_id: batchId,
				instructor_id: req.body.modified_by,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			const newbatchinstructor = await batch_instructor_model.insert(Batch_instructor);

			const Batch_course = {
				batch_id: batchId,
				course_id: 1,
				status: req.body.status,
				created_on: createdOn,
				created_by: req.body.created_by,
				modified_on: createdOn,
				modified_by: req.body.modified_by
			}
			console.log("4");
			const famous_person_details = await model.PersonCenter_detail(data[0].center_id);
			const newbatchcourse = await batch_courses_model.insert(Batch_course);
			// }
			if (data) {
				res.status(StatusCodes.OK).send({ status: true, message: "Center has been created successfully", data: data, famous_person_details });
			} else {
				res.status(StatusCodes.OK).send({ status: false, message: "Something went wrong.Please try again later." });
			}
		}
	} catch (e) {
		console.log(`Error in create`, e);
		next(e);
	}
};