require 'test_helper'

class PropuestaControllerTest < ActionController::TestCase
  setup do
    @propuestum = propuesta(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:propuesta)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create propuestum" do
    assert_difference('Propuestum.count') do
      post :create, propuestum: { finality: @propuestum.finality, object: @propuestum.object, scope_id: @propuestum.scope_id, subject_id: @propuestum.subject_id, title: @propuestum.title, user_id: @propuestum.user_id }
    end

    assert_redirected_to propuestum_path(assigns(:propuestum))
  end

  test "should show propuestum" do
    get :show, id: @propuestum
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @propuestum
    assert_response :success
  end

  test "should update propuestum" do
    patch :update, id: @propuestum, propuestum: { finality: @propuestum.finality, object: @propuestum.object, scope_id: @propuestum.scope_id, subject_id: @propuestum.subject_id, title: @propuestum.title, user_id: @propuestum.user_id }
    assert_redirected_to propuestum_path(assigns(:propuestum))
  end

  test "should destroy propuestum" do
    assert_difference('Propuestum.count', -1) do
      delete :destroy, id: @propuestum
    end

    assert_redirected_to propuesta_path
  end
end
