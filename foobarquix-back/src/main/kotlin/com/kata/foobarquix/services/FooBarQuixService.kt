package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

	fun convertNumber(inputNumber: Int): String {
		var result = ""
		val digits = inputNumber.toString()
				
		if (inputNumber % 3 == 0) result += "Foo"
		if (inputNumber % 5 == 0) result += "Bar"

	
		for (digit in digits) {
			when (digit) {
				'3' -> result += "Foo"
				'5' -> result += "Bar"
				'7' -> result += "Quix"

			}
		}

		return if (result.isEmpty()) inputNumber.toString() else result
	}


}