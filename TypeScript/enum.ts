/**
 * enum
 */

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIresponse2<T> {
  status: number;
  type: RType;
  data: T;
}

const response2: APIresponse2<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "test",
};

console.log(response2);