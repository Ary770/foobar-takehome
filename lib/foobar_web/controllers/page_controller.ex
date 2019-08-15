defmodule FoobarWeb.PageController do
  use FoobarWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def fizzbuzz(conn, params) do
    response = cond do
       params["foo"] == "true" && params["bar"] == "true" -> fooBarFunction()
       params["foo"] == "true" -> fooFunction()
       params["bar"] == "true" -> barFunction()
    end

    json(conn, %{message: response})
  end

  def fooFunction() do
    "foo"
  end

  def barFunction() do
    "bar"
  end

  def fooBarFunction() do
    "fooBar"
  end

end
