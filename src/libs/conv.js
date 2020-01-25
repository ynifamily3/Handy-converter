// const base_string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @param input : 입력 문자열
 * @param frombase : from진수에서
 * @param tobase : to진수로 변환한 결과를(최대 36진수 지원)
 * @return string: 변환된 결과를 리턴. ()
 * @exception InvalidNumberException if the input is invalid.
 */

function from_N_to_N(input, frombase, tobase) {
  // console.log("calculated!");
  return parseInt(input, frombase).toString(tobase);
}

// export { from_N_to_N };
export default from_N_to_N;
