export default async function Fetchdata() {
  try {
    const res = await fetch("http://localhost:8000/data", {
      cache: "no-store",
    });

    // 응답이 성공적이지 않을 경우 오류를 발생시킴
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return (
      <div>
        <h1>{data.message}</h1>
      </div>
    );
  } catch (error) {
    // 오류 발생 시 사용자에게 메시지를 표시
    if (error instanceof Error) {
      return (
        <div>
          <h1>데이터를 불러오는 중 오류가 발생했습니다.</h1>
          <p>{error.message}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>알 수 없는 오류가 발생했습니다.</h1>
        </div>
      )
    }
  }
}
