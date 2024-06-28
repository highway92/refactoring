import { statement } from "./statement";
import invoices from "./invoices.json" with { type: "json" };
import plays from "./plays.json" with { type: "json" };

test("statement func 테스트", () => {
  expect(statement(invoices[0], plays)).toBe(
    "청구 내역 (고객명 BigCo)\n" +
      " Hamlet: $650.00 (55석)\n" +
      " As You Like It: $530.00 (35석)\n" +
      " Othello: $580.00 (48석)\n" +
      "총액 $1,760.00\n" +
      "적립 포인트 : 55점\n"
  );
});
