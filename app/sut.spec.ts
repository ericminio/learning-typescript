import { suite, test } from "mocha-typescript";
import { expect } from 'chai';
import 'mocha';

import { Sut } from './lib/sut';

@suite class SutTest {

    @test isAvailableForTest() {
        let sut = new Sut();

        expect(sut).not.to.equal(undefined);
    }

    @test canNowBeTestDriven() {
        let sut = new Sut();

        expect(sut.doSomething()).to.equal('crazy');
    }
}
