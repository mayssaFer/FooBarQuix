package com.kata.foobarquix

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Assertions

@SpringBootTest
class FooBarQuixServiceTest {

	@Test
	fun testConvertNumber() {
		 val fooBarQuix = FooBarQuixService()
		Assertions.assertEquals("1", fooBarQuix.convertNumber(1))
        Assertions.assertEquals("FooFoo", fooBarQuix.convertNumber(3))
        Assertions.assertEquals("BarBar", fooBarQuix.convertNumber(5))
        Assertions.assertEquals("Quix", fooBarQuix.convertNumber(7))
        Assertions.assertEquals("Foo", fooBarQuix.convertNumber(9))
        Assertions.assertEquals("FooBar", fooBarQuix.convertNumber(51))
        Assertions.assertEquals("BarFoo", fooBarQuix.convertNumber(53))
		Assertions.assertEquals("FooFooFoo", fooBarQuix.convertNumber(33))
	    Assertions.assertEquals("FooQuix", fooBarQuix.convertNumber(27))
		Assertions.assertEquals("FooBarBar", fooBarQuix.convertNumber(15))
	}

}
