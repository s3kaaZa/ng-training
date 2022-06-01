import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../services/create-user.validator';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public createUserForm!: FormGroup;
  public gender: boolean = false;

  constructor(
    private _formBuilder: FormBuilder, // ??? Свойство "_formBuilder" объявлено, но его значение не было прочитано
    private _userService: UsersService,
  ) {
    this.createUserForm = _formBuilder.group({
      "firstName": ['', [Validators.required]],
      "lastName": ['', [Validators.required]],
      "email": ['', [
        Validators.required,
        Validators.email,
        emailValidator(),    //(control.value.substring(control.value.indexOf('@') + 1) == 'gmail.com')
        /* 
        Требования к имени пользователя
        Если при регистрации аккаунта Google или Gmail появляется ошибка "Это имя пользователя запрещено", скорее всего, имя пользователя не соответствует нашим требованиям. Они перечислены ниже.

        Примечание. Псевдонимы "abuse" и "postmaster" использовать нельзя, так как они заняты для технических сообщений. Информацию об этом читайте в этих правилах.

        Ограничения по длине
        Имя пользователя может состоять из 6–30 знаков и содержать буквы, цифры и символы.

        Специальные символы
        Имя пользователя может содержать буквы латинского алфавита (a–z), цифры (0–9) и точки (.).
        Запрещено использовать амперсанд (&), знаки равенства (=) и сложения (+), скобки (<>), запятую (,), символ подчеркивания (_), апостроф ('), дефис (-) и несколько точек подряд.
        Имя пользователя может начинаться и заканчиваться любым разрешенным символом, кроме точки (.). В остальном точки в адресах Gmail не играют никакой роли.  
        */
      ]],
      "age": ['', [
        Validators.required,
        Validators.min(15),
        Validators.max(100),
      ]],
      "company": ['', [
        Validators.required,
        Validators.maxLength(35)
      ]],
      "department": ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      "gender": ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  submit() {
    this._userService.createNewUser(this.createUserForm.value);
  }
}