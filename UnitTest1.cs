using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyMvcApp.Controllers;
using MyMvcApp.Models;
using Xunit;

namespace MyMvcApp.Tests
{
    public class UserControllerTests
    {
        [Fact]
        public void Delete_UserExists_ReturnsRedirectToActionResult()
        {
            // Arrange
            UserController.userlist = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "john@example.com" },
                new User { Id = 2, Name = "Jane Doe", Email = "jane@example.com" }
            };
            var controller = new UserController();

            // Act
            var result = controller.Delete(1, null);

            // Assert
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result);
            Assert.Equal("Index", redirectToActionResult.ActionName);
            Assert.DoesNotContain(UserController.userlist, u => u.Id == 1);
        }

        [Fact]
        public void Delete_UserDoesNotExist_ReturnsNotFoundResult()
        {
            // Arrange
            UserController.userlist = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "john@example.com" },
                new User { Id = 2, Name = "Jane Doe", Email = "jane@example.com" }
            };
            var controller = new UserController();

            // Act
            var result = controller.Delete(3, null);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}