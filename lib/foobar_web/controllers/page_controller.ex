defmodule FoobarWeb.PageController do
  use FoobarWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def fizzbuzz(conn, params) do
    response = cond do
       params["foo"] == "true" && params["bar"] == "true" -> "fooBar"
       params["foo"] == "true" -> "foo"
       params["bar"] == "true" -> "bar"
    end

    json(conn, %{message: response})
  end

end
